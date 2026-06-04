export type ProjectId = 'neomaind' | 'tatell';
export type ContentType = 'image' | 'video';
export type ShowCaseDevice = 'desktop' | 'tablet';
export type MobileDeviceModel = 'iphone13';

export type ShowCase = {
  contentType: ContentType;
  deviceType:
    | {
        model: MobileDeviceModel;
        type: 'mobile';
      }
    | {
        type: ShowCaseDevice;
      };
};

export type Project<ID extends ProjectId> = {
  id: ID;
  showCase: ShowCase;
};

type Description = (
  | { items: string[]; type: 'list' }
  | { type: 'text'; value: string }
)[];

export type ProjectDict<Id extends ProjectId> = Project<Id> & {
  description: Description;
  linkBtn?: {
    href: string;
    label: string;
  };
  title: string;
};

export type ProjectList = [ProjectDict<'tatell'>, ProjectDict<'neomaind'>];
