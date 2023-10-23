import React, {useState} from 'react';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import Editor from "@/public/ckeditor5-40.0.0-s0m52dwdkflf";

interface TabContentProps {
    modify: boolean;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
}

const TabContent: React.FC<TabContentProps> = ({
    modify, content, setContent
                    }) => {

    return (
        <div className="p-1">
            {modify ? (
                <div>
                    <CKEditor editor={Editor}
                              data={content}
                              onChange={(event, editor) => setContent(editor.data.get())}
                    />
                </div>
            ) : (
                <div className="p-6 overflow-y-auto h-[75vh]">
                    <div dangerouslySetInnerHTML={ {__html:content}}></div>
                </div>
            )}
        </div>
    );
};

export default TabContent;