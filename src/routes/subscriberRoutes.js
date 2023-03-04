const express = require('express');
const {
  getSubscribers,
  createSubscribers,
  deleteSubscriber,
  getSubscriberNames,
  getSubscriberById,
  UpdateSubscriber,
} = require('../controllers/subscriberController');

const router = express.Router();

//make a  GET request to get all subscribers
router.route('/subscribers').get(getSubscribers);

// make a GET request for the path '/subscribers/names'
router.route('/subscribers/names').get(getSubscriberNames);

// make a GET request to get subscriber by Id
router.route('/subscribers/:id').get(getSubscriberById);

// make a POST request to add a subscriber
router.route('/subscribers').post(createSubscribers);

// make a DELETE request as per subscriber Id
router.route('/subscribers/:id').delete(deleteSubscriber);

// make a PATCH request to update subscriber as per Id
router.route('/subscribers/:id').patch(UpdateSubscriber);

module.exports = router;
