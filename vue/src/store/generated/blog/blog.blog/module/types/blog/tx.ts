/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "blog.blog";

export interface MsgCreatePost {
  creator: string;
  title: string;
  body: string;
}

export interface MsgCreatePostResponse {
  id: number;
}

export interface MsgCreateGeohash {
  creator: string;
  ssid: string;
  bssid: string;
  geohash: string;
  timestamp: string;
}

export interface MsgCreateGeohashResponse {}

const baseMsgCreatePost: object = { creator: "", title: "", body: "" };

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
};

const baseMsgCreatePostResponse: object = { id: 0 };

export const MsgCreatePostResponse = {
  encode(
    message: MsgCreatePostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePostResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePostResponse>
  ): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateGeohash: object = {
  creator: "",
  ssid: "",
  bssid: "",
  geohash: "",
  timestamp: "",
};

export const MsgCreateGeohash = {
  encode(message: MsgCreateGeohash, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ssid !== "") {
      writer.uint32(18).string(message.ssid);
    }
    if (message.bssid !== "") {
      writer.uint32(26).string(message.bssid);
    }
    if (message.geohash !== "") {
      writer.uint32(34).string(message.geohash);
    }
    if (message.timestamp !== "") {
      writer.uint32(42).string(message.timestamp);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGeohash {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGeohash } as MsgCreateGeohash;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.ssid = reader.string();
          break;
        case 3:
          message.bssid = reader.string();
          break;
        case 4:
          message.geohash = reader.string();
          break;
        case 5:
          message.timestamp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGeohash {
    const message = { ...baseMsgCreateGeohash } as MsgCreateGeohash;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.ssid !== undefined && object.ssid !== null) {
      message.ssid = String(object.ssid);
    } else {
      message.ssid = "";
    }
    if (object.bssid !== undefined && object.bssid !== null) {
      message.bssid = String(object.bssid);
    } else {
      message.bssid = "";
    }
    if (object.geohash !== undefined && object.geohash !== null) {
      message.geohash = String(object.geohash);
    } else {
      message.geohash = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    return message;
  },

  toJSON(message: MsgCreateGeohash): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ssid !== undefined && (obj.ssid = message.ssid);
    message.bssid !== undefined && (obj.bssid = message.bssid);
    message.geohash !== undefined && (obj.geohash = message.geohash);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGeohash>): MsgCreateGeohash {
    const message = { ...baseMsgCreateGeohash } as MsgCreateGeohash;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.ssid !== undefined && object.ssid !== null) {
      message.ssid = object.ssid;
    } else {
      message.ssid = "";
    }
    if (object.bssid !== undefined && object.bssid !== null) {
      message.bssid = object.bssid;
    } else {
      message.bssid = "";
    }
    if (object.geohash !== undefined && object.geohash !== null) {
      message.geohash = object.geohash;
    } else {
      message.geohash = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    return message;
  },
};

const baseMsgCreateGeohashResponse: object = {};

export const MsgCreateGeohashResponse = {
  encode(
    _: MsgCreateGeohashResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateGeohashResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateGeohashResponse,
    } as MsgCreateGeohashResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateGeohashResponse {
    const message = {
      ...baseMsgCreateGeohashResponse,
    } as MsgCreateGeohashResponse;
    return message;
  },

  toJSON(_: MsgCreateGeohashResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateGeohashResponse>
  ): MsgCreateGeohashResponse {
    const message = {
      ...baseMsgCreateGeohashResponse,
    } as MsgCreateGeohashResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateGeohash(request: MsgCreateGeohash): Promise<MsgCreateGeohashResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Msg", "CreatePost", data);
    return promise.then((data) =>
      MsgCreatePostResponse.decode(new Reader(data))
    );
  }

  CreateGeohash(request: MsgCreateGeohash): Promise<MsgCreateGeohashResponse> {
    const data = MsgCreateGeohash.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Msg", "CreateGeohash", data);
    return promise.then((data) =>
      MsgCreateGeohashResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
