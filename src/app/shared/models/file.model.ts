export interface FileDto {
  readonly filename: string;
  readonly originalname: string;
  readonly encoding: string;
  readonly mimetype: string;
  readonly destination: string;
  readonly fieldname: string;
  readonly path: string;
  readonly size: number;
}
