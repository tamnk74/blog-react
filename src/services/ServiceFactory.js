import AuthSerice from "./AuthSerice";

const services = {
  auth: AuthSerice,
  // other services ...
};

export const ServiceFactory = {
  get: name => services[name]
};
