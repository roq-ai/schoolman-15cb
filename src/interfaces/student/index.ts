import { AttendanceInterface } from 'interfaces/attendance';
import { ProgressReportInterface } from 'interfaces/progress-report';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  name: string;
  school_id: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  progress_report?: ProgressReportInterface[];
  school?: SchoolInterface;
  _count?: {
    attendance?: number;
    progress_report?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  school_id?: string;
}
