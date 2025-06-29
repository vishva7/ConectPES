import apiClient from './auth';

// Generic API functions with authentication
export const adminAPI = {
  // Events
  events: {
    getAll: () => apiClient.get('/events/all'),
    getById: (id: string) => apiClient.get(`/events/${id}`),
    create: (data: any) => apiClient.post('/events/create', data),
    update: (id: string, data: any) => apiClient.put(`/events/update/${id}`, data),
    delete: (id: string) => apiClient.delete(`/events/delete/${id}`)
  },

  // Projects
  projects: {
    getAll: () => apiClient.get('/projects/all'),
    getById: (id: string) => apiClient.get(`/projects/${id}`),
    create: (data: any) => apiClient.post('/projects/create', data),
    update: (id: string, data: any) => apiClient.put(`/projects/update/${id}`, data),
    delete: (id: string) => apiClient.delete(`/projects/delete/${id}`)
  },

  // Accomplishments
  accomplishments: {
    getAll: () => apiClient.get('/accomplishments/all'),
    getById: (id: string) => apiClient.get(`/accomplishments/${id}`),
    create: (data: any) => apiClient.post('/accomplishments/create', data),
    update: (id: string, data: any) => apiClient.put(`/accomplishments/update/${id}`, data),
    delete: (id: string) => apiClient.delete(`/accomplishments/delete/${id}`)
  },

  // People
  people: {
    getAll: () => apiClient.get('/people/all'),
    getById: (id: string) => apiClient.get(`/people/${id}`),
    create: (data: any) => apiClient.post('/people/create', data),
    update: (id: string, data: any) => apiClient.put(`/people/update/${id}`, data),
    delete: (id: string) => apiClient.delete(`/people/delete/${id}`)
  },

  // Facilities
  facilities: {
    getAll: () => apiClient.get('/facilities/all'),
    getById: (id: string) => apiClient.get(`/facilities/${id}`),
    create: (data: any) => apiClient.post('/facilities/create', data),
    update: (id: string, data: any) => apiClient.put(`/facilities/update/${id}`, data),
    delete: (id: string) => apiClient.delete(`/facilities/delete/${id}`)
  },

  // Publications
  publications: {
    getAll: () => apiClient.get('/publications/all'),
    getById: (id: string) => apiClient.get(`/publications/${id}`),
    create: (data: any) => apiClient.post('/publications/create', data),
    update: (id: string, data: any) => apiClient.put(`/publications/update/${id}`, data),
    delete: (id: string) => apiClient.delete(`/publications/delete/${id}`)
  },

  // Gallery
  gallery: {
    getAll: () => apiClient.get('/gallery/all'),
    getById: (id: string) => apiClient.get(`/gallery/${id}`),
    create: (data: any) => apiClient.post('/gallery/create', data),
    update: (id: string, data: any) => apiClient.put(`/gallery/update/${id}`, data),
    delete: (id: string) => apiClient.delete(`/gallery/delete/${id}`)
  },

  // Certificates
  certificates: {
    getAll: () => apiClient.get('/certificates/all'),
    getById: (id: string) => apiClient.get(`/certificates/${id}`),
    create: (data: any) => apiClient.post('/certificates/create', data),
    update: (id: string, data: any) => apiClient.put(`/certificates/update/${id}`, data),
    delete: (id: string) => apiClient.delete(`/certificates/delete/${id}`)
  },

  // Home
  home: {
    getAll: () => apiClient.get('/home/all'),
    getById: (id: string) => apiClient.get(`/home/${id}`),
    create: (data: any) => apiClient.post('/home/create', data),
    update: (id: string, data: any) => apiClient.put(`/home/update/${id}`, data),
    delete: (id: string) => apiClient.delete(`/home/delete/${id}`)
  },

  // Contact
  contact: {
    get: () => apiClient.get('/contact/all'),
    update: (data: any) => apiClient.put('/contact/update', data)
  }
};

export default adminAPI;
