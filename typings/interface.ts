export interface User {
    id:string;
    userName:string;
    userNickName:string;
    type:'menti'|'mento'
}

export interface CampInfo {
    id:number;
    title:string;
    startDate:string;
    status:string;
    field:string;
    category:string;
    thumbUrl:string;
}

export interface CommunityQuestion {
    id:number;
    writer:string;
    title:string;
    content:string;
    viewCount:number;
    category:string;
    createdAt:string;
    answer:CommnunityAnswer[];
}

export interface CommnunityAnswer{
    id:number;
    targetId:number;
    writer:string;
    content:string;
    createdAt:string;
}