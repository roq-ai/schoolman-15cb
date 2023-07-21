import axios from 'axios';
import queryString from 'query-string';
import { ProgressReportInterface, ProgressReportGetQueryInterface } from 'interfaces/progress-report';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getProgressReports = async (
  query?: ProgressReportGetQueryInterface,
): Promise<PaginatedInterface<ProgressReportInterface>> => {
  const response = await axios.get('/api/progress-reports', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createProgressReport = async (progressReport: ProgressReportInterface) => {
  const response = await axios.post('/api/progress-reports', progressReport);
  return response.data;
};

export const updateProgressReportById = async (id: string, progressReport: ProgressReportInterface) => {
  const response = await axios.put(`/api/progress-reports/${id}`, progressReport);
  return response.data;
};

export const getProgressReportById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/progress-reports/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteProgressReportById = async (id: string) => {
  const response = await axios.delete(`/api/progress-reports/${id}`);
  return response.data;
};
