import axios from 'axios';

export const getAllComplaintService = async body => {
  try {
    const allComplaint = await axios.get('http://localhost:3030/complaint');
    return allComplaint?.data;
  } catch (e) {
    throw e;
  }
};

export const modifyComplaint = async body => {
  try {
    const { id, ...rest } = body;
    const allComplaint = await axios.patch(
      `http://localhost:3030/complaint/${id}`,
      rest
    );
    return allComplaint?.data;
  } catch (e) {
    throw e;
  }
};

export const createComplaintService = async body => {
  try {
    const allComplaint = await axios.post(
      'http://localhost:3030/complaint',
      body
    );

    return allComplaint?.data;
  } catch (e) {
    throw e;
  }
};
