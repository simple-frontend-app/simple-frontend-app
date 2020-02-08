const extractServerError = (error) => {
    return error?.response?.data?.message ? error.response.data.message : "Internal server error, try again later";
};

export {
    extractServerError
};
