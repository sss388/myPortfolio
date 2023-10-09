/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Code, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { AutoImage, ImageBlock, ImageCaption, ImageResize, ImageStyle, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Table, TableCellProperties, TableColumnResize, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Alignment | typeof AutoImage | typeof Base64UploadAdapter | typeof Bold | typeof Code | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof Heading | typeof ImageBlock | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageUpload | typeof Italic | typeof Link | typeof List | typeof ListProperties | typeof Paragraph | typeof Table | typeof TableCellProperties | typeof TableColumnResize | typeof TableToolbar | typeof Underline)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        table: {
            contentToolbar: string[];
        };
    };
}
export default Editor;
