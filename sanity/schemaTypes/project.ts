import { defineType,defineField } from "sanity";


export default defineType ({
    title:"Project",
    name:"myproject",
    type:"document",
    fields:[
        defineField({
            title:"Title",
            name:"title",
            type:"string",
            
        }),
        defineField({
            title:"image",
            name:"image",
            type:'image',

        }),
        defineField({
            title:"gitupUrl",
            name:"gitupUrl",
            type:"string"
        }),
        defineField({
            title:"projectUrl",
            name:"projectUrl",
            type:"string"
        }),

    ]

})


