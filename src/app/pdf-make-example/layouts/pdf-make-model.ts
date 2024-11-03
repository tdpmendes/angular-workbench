import {ContextPageSize, TDocumentDefinitions} from 'pdfmake/interfaces'

let base64 = "";

export let documentDefinition = {
    pageMargins: [40,40,40,60],
    header:[
        {text:"\n"}
    ],
    footer:function (currentPage:number, pageCount:number, pageSize:ContextPageSize ){
        let textRect = {type: 'rect',color:'white',x:550,y:-20,w:20,h:12};
        return [
            {
                canvas:[textRect],
            },
            {
                columns:[
                    {
                        width: textRect.w,
                        noWrap: true,
                        maxHeight: textRect.h,
                        text: currentPage+"/"+pageCount,
                        color:"black",
                        style:'footerText'
                    }
                ],
                relativePosition: {
                    x: textRect.x+10,
                    y: textRect.y+35
                },
            },
            //{image:base64,width:pageSize.width-50}
        ];
    },
    title: "examplePdf",
    content:[
        //recommended to add an array for each page ending with a pagebreak like so:
        //page one
        [
            {text:'',style:"someStyle",pageBreak:'after'}
        ]
    ],
    //add your styles here
    styles: {
        someStyle:{
            fontSize: 20
        },
        footerText:{
            fontSize: 6
        }
    }

} as TDocumentDefinitions;