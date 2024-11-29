export interface NavLinkItemProp {
  id: number;
  href: string;
  text: string;
}

export interface NavLinkSubpages extends NavLinkItemProp {
  subpages?: NavLinkItemProp[];
}
