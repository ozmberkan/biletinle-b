export const response = (statusCode, success, message, data, res) => {
  if (res) {
    return res.status(statusCode).json({
      success,
      message,
      data: success ? data : null,
    });
  }
};
