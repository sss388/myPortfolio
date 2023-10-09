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
import {
	AutoImage,
	ImageBlock,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageUpload
} from '@ckeditor/ckeditor5-image';
import { Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import {
	Table,
	TableCellProperties,
	TableColumnResize,
	TableToolbar
} from '@ckeditor/ckeditor5-table';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Alignment,
		AutoImage,
		Base64UploadAdapter,
		Bold,
		Code,
		Essentials,
		FontBackgroundColor,
		FontColor,
		Heading,
		ImageBlock,
		ImageCaption,
		ImageResize,
		ImageStyle,
		ImageUpload,
		Italic,
		Link,
		List,
		ListProperties,
		Paragraph,
		Table,
		TableCellProperties,
		TableColumnResize,
		TableToolbar,
		Underline
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'link',
				'code',
				'bulletedList',
				'numberedList',
				'alignment',
				'|',
				'fontBackgroundColor',
				'fontColor',
				'underline',
				'|',
				'imageUpload',
				'insertTable',
				'undo',
				'redo',
				'|'
			]
		},
		language: 'ko',
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableCellProperties'
			]
		}
	};
}

export default Editor;
