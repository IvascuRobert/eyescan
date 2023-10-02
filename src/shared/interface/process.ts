export interface Process {
  createdDate?: Date;
  leftEar?: number;
  rightEar?: number;
  questionnaire?: number;
  device?: any;
  status: 'OPEN' | 'END' | 'TRIAL' | 'WIN' | 'LOST';
}
