'use client'

import React, {useEffect, useState} from 'react';
import {Box, IconButton, Modal} from "@mui/material";
import {Close, EditOff, Mode, Save} from "@mui/icons-material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import TabContent from "@/app/components/modals/components/TabContent";
import axios from "axios";
import dynamic from "next/dynamic";

const TabContent = dynamic(() => import('./components/TabContent'), {
    ssr: false,
});

interface ProjectModalProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedId: string;
    email?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
    modal, setModal, selectedId, email
                                                   }) => {
    const [tab, setTab] = useState("overview")
    const tabs = [
        {value: 'overview', label: '개요'},
        {value: 'design', label: '설계'},
        {value: 'struct', label: '구조'},
        {value: 'main-point', label: '핵심기능'},
        {value: 'detail-code', label: '구현상세'},
        {value: 'review', label: '후기'}
    ];
    const [modify, setModify] = useState(false);
    const [content, setContent] = useState('');

    const saveTab = async () => {
        await axios.post(process.env.BACKEND_URL + '/project/tabSave', {
            projectId: selectedId,
            tab,
            content,
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getTab = async () => {
        await axios.get(`${process.env.BACKEND_URL}/project/getTab?projectId=${selectedId}&tab=${tab}`
        ).then((res)=>{
            setContent(res.data);
            // console.log(res.data);
        })
    }

    useEffect(() => {
        if(modal && !modify) getTab();
    },[modal, tab, modify])

    return (
        <Modal
            open={modal}
            onClose={() => setModal(false)}
        >
            <Box className="left-[5%] top-[5%] w-[90%] h-[90%] bg-white border-[5px] relative
                rounded-lg border-black p-6"
            >
                {email === process.env.NEXT_PUBLIC_MY_EMAIL as string && (
                    <div className="absolute right-2 top-2 z-10">
                        <IconButton color={"info"}
                            onClick={()=>setModify(!modify)}
                        >
                            {modify ? (<EditOff/>) : (<Mode/>)}
                        </IconButton>

                        {modify && (
                            <IconButton color={"info"}
                                    onClick = {()=>saveTab()}
                            >
                                <Save/>
                            </IconButton>
                        )}

                        <IconButton color={"error"}
                                    onClick={() => setModal(false)}
                        >
                            <Close/>
                        </IconButton>
                    </div>
                )}

                <Tabs
                    value={tab}
                    onChange={(event, newValue) => {
                        setTab(newValue); setModify(false)
                    }}
                    textColor="primary"
                    indicatorColor="secondary"
                >
                    {tabs.map((item, index) => (
                        <Tab value={item.value} label={item.label} key={index}/>
                    ))}
                </Tabs>

                <TabContent modify={modify}
                            content={content}
                            setContent={setContent}
                />
            </Box>
        </Modal>
    );
};

export default ProjectModal;