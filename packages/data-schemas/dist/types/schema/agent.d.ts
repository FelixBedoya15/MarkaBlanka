/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Schema } from 'mongoose';
import type { IAgent } from '~/types';
declare const agentSchema: Schema<IAgent, import("mongoose").Model<RawDocType, any, any, any, import("mongoose").IfAny<RawDocType, any, import("mongoose").Document<unknown, any, RawDocType> & import("mongoose").Default__v<import("mongoose").Require_id<RawDocType>>>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("mongoose").ResolveTimestamps<import("mongoose").ObtainDocumentType<any, RawDocType, import("mongoose").ResolveSchemaOptions<TSchemaOptions>>, import("mongoose").ResolveSchemaOptions<TSchemaOptions>>, import("mongoose").IfAny<import("mongoose").FlatRecord<DocType>, any, TVirtuals & TInstanceMethods extends infer T ? T extends TVirtuals & TInstanceMethods ? T extends Record<string, never> ? import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DocType>> & import("mongoose").Default__v<import("mongoose").Require_id<import("mongoose").FlatRecord<DocType>>> : import("mongoose").IfAny<T, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DocType>> & import("mongoose").Default__v<import("mongoose").Require_id<import("mongoose").FlatRecord<DocType>>>, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DocType>> & Omit<import("mongoose").Default__v<import("mongoose").Require_id<import("mongoose").FlatRecord<DocType>>>, keyof T> & T> : never : never>>;
export default agentSchema;
