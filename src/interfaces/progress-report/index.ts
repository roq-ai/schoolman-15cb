import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface ProgressReportInterface {
  id?: string;
  student_id: string;
  report: string;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  _count?: {};
}

export interface ProgressReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  report?: string;
}
