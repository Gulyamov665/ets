// import Accordion from '@mui/material/Accordion'
// import AccordionSummary from '@mui/material/AccordionSummary'
// import AccordionDetails from '@mui/material/AccordionDetails'
// import Typography from '@mui/material/Typography'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { ServiceItems } from '@/services/servicesApi'

// export const ServicesAccordion = ({ item }: { item: ServiceItems }) => {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           <Typography component="span">{item.title}</Typography>
//         </AccordionSummary>
//         {item.items.map((subItem) => (
//           <AccordionDetails key={subItem.id}>
//             <Typography component="span">{subItem.text}</Typography>
//           </AccordionDetails>
//         ))}
//       </Accordion>
//     </div>
//   )
// }
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ServiceItems } from '@/services/servicesApi'

export const ServicesAccordion = ({ item }: { item: ServiceItems }) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      sx={{
        borderRadius: '12px',
        mb: 2,
        '&:before': { display: 'none' },
      }}
      className="
        bg-white
        border
        border-gray-200
        transition-all
        hover:border-brand-orange
      "
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon className="text-brand-orange transition-transform duration-200" />
        }
        sx={{
          px: 3,
          py: 2,
        }}
        className="hover:bg-brand-grey"
      >
        <Typography className="font-semibold text-gray-800 text-lg">
          {item.title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails className="flex flex-col gap-4 px-6 pb-6">
        {item.items.map((subItem) => (
          <div
            key={subItem.id}
            className="
              border-l-4
              border-brand-orange
              pl-4
              text-gray-600
              leading-relaxed
            "
          >
            {subItem.text}
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}
