import Employee from 'Employee'


export default class Admin extends Employee {

    constructor(id, name, reviews) {
        super(id, name, reviews);
    }

    addReview(review) {
        this.reviews.push(review);
    }

}
