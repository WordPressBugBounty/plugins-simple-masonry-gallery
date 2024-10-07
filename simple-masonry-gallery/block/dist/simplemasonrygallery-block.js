!function(){"use strict";var e=window.wp.element;const{registerBlockType:t}=wp.blocks,{Fragment:a,RawHTML:l}=wp.element,{InspectorControls:i,InnerBlocks:r,MediaUpload:n,MediaUploadCheck:s}=wp.blockEditor,{RangeControl:m,Button:o,PanelBody:u,ToggleControl:g}=wp.components;t("simple-masonry-gallery/simplemasonrygallery-block",{title:"Simple Masonry Gallery",icon:"images-alt",category:"common",attributes:{list_images:{type:"string",source:"html"},image:{type:"array"},images_ids:{type:"array"},width:{type:"number",default:100},padding:{type:"number",default:1},r_images:{type:"number",default:0},link:{type:"boolean",default:!1}},edit(t){const{attributes:{image:r},setAttributes:u}=t;function d(e,t){let a=[];for(let t in e)a.push(e[t].id);return a}function p(e,t){let a='<div style="columns: auto '+t.attributes.width+'px; column-gap: 0; margin: 0 auto; padding: 0;">';for(let l in e)a+='<div style="display: inline-block; padding: '+t.attributes.padding+'px; width: 100%;">',t.attributes.link&&(a+='<a href="'+e[l].url+'">'),a+='<img src="'+e[l].url+'" style="width: '+t.attributes.width+"px; border-radius: "+t.attributes.r_images+'px; vertical-align: bottom;">',t.attributes.link&&(a+="</a>"),a+="</div>";return a+="</div>",a}return t.attributes.list_images=p(t.attributes.image,t),[(0,e.createElement)(a,null,(0,e.createElement)(l,null,t.attributes.list_images),(0,e.createElement)(s,null,(0,e.createElement)(n,{title:"Simple Masonry Gallery Block",onSelect:e=>{u({image:e,images_ids:d(e),list_images:p(e,t)})},allowedTypes:["image"],gallery:!0,multiple:!0,value:t.attributes.images_ids,render:a=>{let{open:l}=a;return(0,e.createElement)(o,{className:"button button-large",onClick:l},t.attributes.images_ids?simplemasonrygallery_text.updategallery:simplemasonrygallery_text.creategallery)}})),(0,e.createElement)(i,null,(0,e.createElement)(m,{label:simplemasonrygallery_text.width,max:1e3,min:10,value:t.attributes.width,onChange:e=>t.setAttributes({width:e})}),(0,e.createElement)(m,{label:simplemasonrygallery_text.space,max:20,min:0,value:t.attributes.padding,onChange:e=>t.setAttributes({padding:e})}),(0,e.createElement)(m,{label:simplemasonrygallery_text.r_images,max:20,min:0,value:t.attributes.r_images,onChange:e=>t.setAttributes({r_images:e})}),(0,e.createElement)(g,{label:simplemasonrygallery_text.link,checked:t.attributes.link,onChange:e=>t.setAttributes({link:e})})))]},save(t){return(0,e.createElement)(a,null,t.attributes.list_images&&(0,e.createElement)(l,null,t.attributes.list_images))}})}();