import Accordion from '../components/Accordion'

function ArccordionPage () {

    const items = [
        {
            id: 'dkfjsd',
            label:'Can I use React on a project?',
            content:'You can use React on any project you want You can use React on any project you want,' 
        },
        {
            id: 'xsada',
            label:'Can I use JavaScript on a project?',
            content:'You can use JavaScript on any project you want You can use JavaScript on any project you want.' 
        },
        {
            id: 'sds',
            label:'Can I use CSS on a project?',
            content:'You can use CSS on any project you want You can use JavaScript on any project you want.' 
        },
    ];
      
  return <Accordion items={items} />;
}

export default ArccordionPage; 