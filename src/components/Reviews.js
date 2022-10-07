import React from 'react'
import {useState} from 'react'
import {Button, Form, Input} from 'reactstrap';
import Stars from './Stars';


function Review() {
  const [reviews, setReviews] = useState("");
  const [value, setValue] = useState("");
  const [star, setStar] = useState();
  const onChange = (e: any) => {
    setReviews(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted", star);
    setValue(reviews + " with " + star + " star ");
  };
  return (
  <div className="form-container">
  <Stars setStar={setStar} />
  <Form onSubmit={onSubmit}>
    <Input
      className="form-control"
      type="text"
      placeholder="Enter you review"
      value={reviews}
      onChange={onChange}
    />
    <br></br>
    <Button type="submit" className="btn btn-primary">
      Submit
    </Button>
    <div>{value}</div>
  </Form>
</div>
);
}

export default Review