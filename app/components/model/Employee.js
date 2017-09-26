
export default class Employee  {


    constructor(id, name, reviews) {
        this.id = id;
        this.name = name;
        this.reviews = reviews;
    }

    addReview(review) {
        this.reviews.push(review);
    }

}
