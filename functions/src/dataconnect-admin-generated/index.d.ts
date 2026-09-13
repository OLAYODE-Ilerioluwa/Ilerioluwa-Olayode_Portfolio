import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface Asset_Key {
  id: UUIDString;
  __typename?: 'Asset_Key';
}

export interface Client_Key {
  id: UUIDString;
  __typename?: 'Client_Key';
}

export interface CreateDataData {
  client_insert: Client_Key;
  project_insert: Project_Key;
  lead_insert: Lead_Key;
  milestone_insert: Milestone_Key;
  asset_insert: Asset_Key;
}

export interface DeleteDataData {
  client_delete?: Client_Key | null;
  project_delete?: Project_Key | null;
  lead_delete?: Lead_Key | null;
  milestone_delete?: Milestone_Key | null;
  asset_delete?: Asset_Key | null;
}

export interface Lead_Key {
  id: UUIDString;
  __typename?: 'Lead_Key';
}

export interface Milestone_Key {
  id: UUIDString;
  __typename?: 'Milestone_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface ReadDataData {
  client?: {
    name: string;
    email: string;
  };
  project?: {
    title: string;
    budget: number;
  };
  lead?: {
    contactName: string;
    projectBrief: string;
  };
  milestone?: {
    title: string;
    dueDate?: DateString | null;
  };
  asset?: {
    url: string;
    type: string;
  };
  clients: ({
    name: string;
  })[];
  projects: ({
    title: string;
  })[];
  leads: ({
    contactName: string;
  })[];
  milestones: ({
    title: string;
  })[];
  assets: ({
    url: string;
  })[];
}

export interface UpdateDataData {
  client_update?: Client_Key | null;
  project_update?: Project_Key | null;
  lead_update?: Lead_Key | null;
  milestone_update?: Milestone_Key | null;
  asset_update?: Asset_Key | null;
}

/** Generated Node Admin SDK operation action function for the 'CreateData' Mutation. Allow users to execute without passing in DataConnect. */
export function createData(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateDataData>>;
/** Generated Node Admin SDK operation action function for the 'CreateData' Mutation. Allow users to pass in custom DataConnect instances. */
export function createData(options?: OperationOptions): Promise<ExecuteOperationResponse<CreateDataData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateData' Mutation. Allow users to execute without passing in DataConnect. */
export function updateData(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateDataData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateData' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateData(options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateDataData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteData' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteData(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteDataData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteData' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteData(options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteDataData>>;

/** Generated Node Admin SDK operation action function for the 'ReadData' Query. Allow users to execute without passing in DataConnect. */
export function readData(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ReadDataData>>;
/** Generated Node Admin SDK operation action function for the 'ReadData' Query. Allow users to pass in custom DataConnect instances. */
export function readData(options?: OperationOptions): Promise<ExecuteOperationResponse<ReadDataData>>;

