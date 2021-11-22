export interface Asset  {
  assetId: string;
  dateSent: string;
  assetUrl: string;
  status: string;
  message: string | null;
  reviewedAt: string | null;
}

export interface Proof {
  lineitemId: string;
  fulfillmentAssetId: string;
  title: string;
  proof: Asset
}

export interface UpdateProof {
  orderId: string,
  lineitemId: string,
  status: string,
  message: string | null,
}
