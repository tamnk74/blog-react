import Request from '../lib/utils/Request'

export default class BaseService {

  /**
   * Constructor
   * 
   * @param {String} resource base url
   */
  constructor(resource) {
    this.resource = resource;
  }

  /**
   * Get all data
   */
  getAll() {
    return Repository.get(`${this.resource}`);
  }

  /**
   * Get object list in paginate
   * 
   * @param {Object} paymoad params for pagination like page, limit
   */
  paginate(payload) {
    return Repository.get(`${this.resource}`, payload);
  }
  
  /**
   * Get object info
   * 
   * @param {*} id id of object
   */
  getOne(id) {
    return Repository.get(`${this.resource}/${id}`);
  }

  /**
   * Create object
   * 
   * @param {Object} payload 
   */
  create(payload) {
    return Repository.post(`${this.resource}`, payload);
  }

  /**
   * Update object
   * 
   * @param {Object} payload 
   * @param {*} id 
   */
  update(payload, id) {
    return Repository.put(`${this.resource + id}`, payload);
  }

  /**
   * Remove object
   * 
   * @param {*} id 
   */
  remove(id) {
    return Repository.delete(`${this.resource + id}`);
  }
};
