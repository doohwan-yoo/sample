/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, PipeMetadata, resolveForwardRef } from '@angular/core';
import { ReflectorReader, reflector } from '../core_private';
import { BaseException } from './facade/exceptions';
import { isPresent, stringify } from './facade/lang';
function _isPipeMetadata(type) {
    return type instanceof PipeMetadata;
}
export class PipeResolver {
    constructor(_reflector = reflector) {
        this._reflector = _reflector;
    }
    /**
     * Return {@link PipeMetadata} for a given `Type`.
     */
    resolve(type, throwIfNotFound = true) {
        var metas = this._reflector.annotations(resolveForwardRef(type));
        if (isPresent(metas)) {
            var annotation = metas.find(_isPipeMetadata);
            if (isPresent(annotation)) {
                return annotation;
            }
        }
        if (throwIfNotFound) {
            throw new BaseException(`No Pipe decorator found on ${stringify(type)}`);
        }
        return null;
    }
}
/** @nocollapse */
PipeResolver.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PipeResolver.ctorParameters = [
    { type: ReflectorReader, },
];
//# sourceMappingURL=pipe_resolver.js.map