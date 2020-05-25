export interface ISituations {
  [name: string]: ISituation
}
  
export interface ISituation {
  header: string;
  description: string;
  options: string[];
}

export enum ContentType {
  youtube = "youtube",
  options = "options",
  iframe = "iframe",
  conflict = "conflict",
}
  
export interface IContent<T extends YoutubeContent | OptionsContent | IframeContent | ConflictContent> {
  position: number[];
  type: ContentType;
  header: string;
  content: T;
}

export type AnyContent = IContent<YoutubeContent> | IContent<OptionsContent> | IContent<IframeContent> | IContent<ConflictContent>;

export interface YoutubeContent {
  url: string;
}

export interface IframeContent {
  url: string;
  height?: number | string;
}

export interface OptionsContent {
  description: string;
  bannerImg: string;
  options: string[];
  correctAnswers: number[];
}
export interface ConflictContent {
  description: string;
  sequence: SequenceItem[];
  scene: SceneElement[];
  situationImage: string;
  situationSpeech: string;
  situationBalloonClass?: string;
  options: string[];
  reactions: ConflictReaction[];
}

export interface SceneElement {
  image?: string;
  type?: SceneElementType;
  position?: [number, number];
  pose: AvatarPose;
}

export enum SceneElementType {
  sprite = "sprite",
  avatar = "avatar",
}

export enum AvatarPose {
  angle = "angle",
  front = "front",
  side = "side"
}

export interface ConflictReaction { 
  correct: boolean, 
  text: string, 
  situationImage: string, 
  confirmText: string, 
  confirmImage?: string 
}

export enum SequenceItemType {
  caption = 'caption',
  speech = 'speech'
}

export interface SequenceItem {
  type: SequenceItemType,
  text: string,
  balloonClass?: string;
  situationImage?: string;
}