import { useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import CodeEditor from '@uiw/react-textarea-code-editor';
import style from './index.module.css';
import { InputSize } from './inputSize'

export function TestCase({ update, ...rest }) {
    const testCase = {
        ...rest
    };

    return (
        <div className={style.container}>

            <Checkbox defaultChecked />
            <Grid container direction={'row'} justifyContent={'space-between'} >
            <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                size='medium'
                fullWidth
                value={testCase.title}
                onClick={(evn) => evn.stopPropagation()}
                onChange={(evn) => {
                    update({
                        ...testCase,
                        title: evn.target.value,
                    })
                    evn.stopPropagation();
                }}
            />
            
            <InputSize
                min={testCase.minInputSize}
                max={testCase.maxInputSize}
                stepsCount={testCase.stepsCount}
                update={(value) => update({
                    ...testCase,
                    minInputSize: value.min,
                    maxInputSize: value.max,
                    stepsCount: value.stepsCount,
                })}
            />

            </Grid>

            <CodeEditor
                value={testCase.generateDataCode}
                language="js"
                placeholder="Please enter JS code."
                onChange={(evn) => update({
                    ...testCase,
                    generateDataCode: evn.target.value
                })}
                padding={15}
                style={{
                    fontSize: 14,
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />

            <CodeEditor
                value={testCase.code}
                language="js"
                placeholder="Please enter JS code."
                onChange={(evn) => update({
                    ...testCase,
                    code: evn.target.value
                })}
                padding={15}
                style={{
                    fontSize: 14,

                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
        </div>
    );
}
