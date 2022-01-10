export const getOptions = (data) => {
  const params = {
    params: {
      "username": data.username,
    },
  };

  if (data.query) {
    params.params = {
      ...params.params,
      ...data.query
    };
  }

  const headers = {
    headers: {
      "X-Openerp-Session-Id": data.session_id
    }
  };

  return { params, headers };
};