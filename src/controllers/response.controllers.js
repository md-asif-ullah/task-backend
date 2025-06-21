const successResponse = (
  res,
  { statusCode = 200, message = "success", data = {} }
) => {
  res.status(statusCode).json({ success: true, message, data });
};

const errorResponse = (
  res,
  { statusCode = 500, message = "Internal server error" }
) => {
  res.status(statusCode).json({ success: false, message });
};

export { successResponse, errorResponse };
