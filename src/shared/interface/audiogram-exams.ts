export interface ExamsSource {
  src: string;
  createdDate: Date;
  name: string;
}

export interface AudiogramExams {
  rightEar: ExamsSource[];
  leftEar: ExamsSource[];
  vocal: ExamsSource[];
}
