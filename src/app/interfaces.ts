export interface NavLinkItemProp {
  id: number;
  href: string;
  text: string;
  subpages?: NavLinkItemProp[]
}

export interface NavLinkSubpages extends NavLinkItemProp {
  subpages?: NavLinkItemProp[];
}
