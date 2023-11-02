class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            //The $regex part allows us to do a partial match search.
            //So even if the keyword is a substring of the name, it will match.
            $regex: this.queryStr.keyword,
            $options: "i", //it means case insensitive search
          },
        }
      : {};

    this.query = this.query.find({ ...keyword }); //it will find all the products of that name
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };

    // console.log(queryCopy);

    //remove some fields for categroy
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);
    // console.log(queryCopy);

    //Filter for price and rating
    let queryStr = JSON.stringify(queryCopy);

    //This is the MongoDB query syntax for greater than,
    // greater than or equal to, less than and less than or equal to.
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    // console.log(queryStr);

    return this;
  }
  pagination(resultPerPage) {
    const currentPage = this.queryStr.page || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
