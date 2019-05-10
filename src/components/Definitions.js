import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchDefinitions} from '../actions/postActions';
// rcc  - class, rfc - function
class Definitions extends Component {

  componentWillMount(){
    this.props.fetchDefinitions();
    console.log(this.props);
  }

//   componentWillReceiveProps(nextProps) {
//     if(nextProps.newPost){
//       this.props.posts.unshift(nextProps.newPost);  // .push
//     }
//   }
  
  render() {

const defineJson = [{
	"id": 2,
	"order_num": 1,
	"name": "agreement",
	"explanation": "\"Agreement\" means this Memorandum of Agreement and all attached schedules, and \"Memorandum of Agreement\" means this Agreement excluding all attached schedules;"
}, {
	"id": 3,
	"order_num": 2,
	"name": "contractor",
	"explanation": "\"Contractor\" means [INSERT CONTRACTOR’S FULL LEGAL NAME HERE];"
}, {
	"id": 4,
	"order_num": 3,
	"name": "fiscal-year",
	"explanation": "\"Fiscal Year\" means a 12 month period beginning on April 1st in a year and ending on March 31st in the following year;"
}, {
	"id": 5,
	"order_num": 4,
	"name": "government",
	"explanation": "\"Government\" means Government of Prince Edward Island, as represented by the Minister of Finance;"
}, {
	"id": 6,
	"order_num": 5,
	"name": "parties",
	"explanation": "\"Parties\" means Government and the Contractor, and \"Party\" means either of them as the context requires;"
}];

    const defineItems = this.props.defines.map(define => (
    //const defineItems = defineJson.map(define => (
      <div key={define.id}>
        <h3>{define.order_num} {define.name}</h3>
        <p>{define.explanation}</p>
      </div>
    ));
    
    return (
      <div>
        <h1>Definitions</h1>
        <p>In this Agreement, the following definitions apply:</p>
        {defineItems}
      </div>
    )
  }
}

// export default Post;

Definitions.propTypes = {
  fetchDefinitions: PropTypes.func.isRequired,
  defines: PropTypes.array.isRequired,
  //newPost: PropTypes.object
}

const mapStateToProps = state => ({
  defines: state.posts.defines
  //newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchDefinitions })(Definitions);