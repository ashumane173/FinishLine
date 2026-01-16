import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  contentBlocks: ContentBlock[];
  msdsSheet?: string; 
  productSpecs?: string;
}

export interface ContentBlock {
  type: 'paragraph' | 'features' | 'specifications' | 'heading';
  title?: string; 
  content?: string; 
  items?: string[]; 
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Product[] = [
    {
      id: 'all-purpose-joint-compound',
      name: 'All Purpose Joint Compound',
      subtitle: 'MSDS Sheet | Product Details Product Specifications',
      image: 'assets/finish-line-orange.png',
      contentBlocks: [
        {
          type: 'paragraph',
          content: 'Finish Line Joint Compounds are professional quality factory pre mixed vinyl based compounds. They are designed for embedding drywall tape, finishing wallboard joints, fasteners, corner bead and drywall trims. They also can be used for skim-coating, simple hand textures and patching cracks in plaster walls.'
        },
        {
          type: 'paragraph',
          content: 'Meets ASTM C475-89 (standard specification for joint compound and joint tape for finishing gypsum wallboard) and OSHA safety requirements'
        },
        {
          type: 'features',
          title: 'Key Features',
          items: [
            'Factory pre mixed',
            'Vacuum processed to eliminate air bubbles',
            'Contractor and job site formulated',
            'Easy to Sand',
            'Low shrinkage and crack resistant',
            'Superior Application Characteristics',
            'Excellent Adhesion'
          ]
        },
        {
          type: 'features',
          title: 'Applications',
          items: [
            'Maintain 50o F minimum working temperature until dry and stable, avoid excessive heat, direct sunlight or freezing conditions',
            '62 lbs covers at least 600 sq ft depending on job conditions and methods of applications',
            '62 lb bucket',
            '50 lb box'
          ]
        },
        {
          type: 'paragraph',
          content: 'Surface should be dry and clean prior to application, final wallboard finish should meet requirements of the five levels of gypsum board finish approved by the gypsum association'
        },
        {
          type: 'features',
          title: 'Awareness',
          items: [
            'Wet sanding is recommended to avoid creating dust',
            'Use eye protection and a respirator (OSHA approved) when dry sanding',
            'Do not ingest',
            'May contain mica, talc, limestone, perlite, plaster, clay and latex',
            'Keep out of reach of children'
          ]
        },
        {
          type: 'features',
          title: 'Finish Line Ready Mix Joint Compound Product Data:',
          items: [
            'Coverage: 120 to 155 lb for every 1200 sq. foot of gypsum board (Depending on conditions of application)',
            'Storage: Protect from freezing or overheating and Finish Line products will have a shelf life of 1 year, under proper storage conditions.',
            'Finish Line All Purpose Joint Compound is available by the 62 lb bucket and 50 lb box.'
          ]
        }
      ],
      msdsSheet: 'assets/MSDS_Finish_Line_All_Purpose_Joint_Compounds.pdf',
      productSpecs: 'assets/Finish_Line_All_Purpose_Product_Information.pdf'
    },
    {
      id: 'extreme-joint-compound',
      name: 'Extreme Joint Compound',
      subtitle: 'MSDS Sheet | Product Details Product Specifications',
      image: 'assets/finish-line-yellow.png',
      contentBlocks: [
        {
          type: 'paragraph',
          content: 'Finish Line Extreme Joint Compound is a ready to use, non-asbestos, vinyl-formulation for embedding drywall tape reinforcement, metal corner beads and drywall trims over wallboard. Extreme Joint Compound may also be used for filling, applying simple textures, and smoothing and finishing coats.'
        },
        {
          type: 'features',
          title: 'Finish Line Extreme Joint Compound Product Data:',
          items: [
            'Coverage: 120 to 155 lb for every 1200 sq. foot of gypsum board (Depending on conditions of application)',
            'Storage: Protect from freezing or overheating and Finish Line products will have a shelf life of 1 year, under proper storage conditions.',
            'Finish Line All Purpose Joint Compound is available in a 4.5 gal. pail or a 3.5 gal. box.'
          ]
        },
        {
          type: 'paragraph',
          content: 'Finish Line Joint Compounds are professional quality factory pre mixed vinyl based compounds. They are designed for embedding drywall tape, finishing wallboard joints, fasteners, corner bead and drywall trims. They also can be used for skim-coating, simple hand textures and patching cracks in plaster walls.'
        },
        {
          type: 'paragraph',
          content: 'Meets ASTM C475-89 (standard specification for joint compound and joint tape for finishing gypsum wallboard) and OSHA safety requirements'
        },
        {
          type: 'features',
          title: 'Application',
          items: [
            'Factory pre mixed',
            'Contractor and job site formulated',
            'Easy to Sand',
            'Low shrinkage and crack resistant',
            'Superior Application Characteristics',
            'Excellent Adhesion'
          ]
        },
        {
          type: 'paragraph',
          content: 'Maintain 50o F minimum working temperature until dry and stable, avoid excessive heat, direct sunlight or freezing conditions'
        },
        {
          type: 'specifications',
          title: 'Storage Instructions',
          items: [
            '4.5 gallons covers at least 600 sq ft depending on job conditions and methods of applications',
            'Available Packaging:',
            '4.5 gal. pail',
            '3.5 gal. box'
          ]
        },
        {
          type: 'paragraph',
          content: 'Surface should be dry and clean prior to application, final wallboard finish should meet requirements of the five levels of gypsum board finish approved by the gypsum association'
        },
        {
          type: 'features',
          title: 'Precaution',
          items: [
            'Wet sanding is recommended to avoid creating dust',
            'Use eye protection and a respirator (OSHA approved) when dry sanding',
            'Do not ingest',
            'May contain mica, talc, limestone, perlite, plaster, clay and latex',
            'Keep out of reach of children'
          ]
        },
      ],
      msdsSheet: 'assets/MSDS_Finish_Line_Extreme_Joint_Compounds.pdf',
      productSpecs: 'assets/Finish_Line_Extreme_Joint_Compound_Product_Information.pdf'
    },
    {
      id: 'setting-joint-compound',
      name: 'Setting Joint Compound',
      subtitle: 'MSDS Sheet | Product Details',
      image: 'assets/joint-compound-green.png',
      contentBlocks: [
        {
          type: 'features',
          title: 'Finish Line Setting Joint Compound Product Data:',
          items: [
            'Color: Off White',
            'Compliance with Standards: Meets ASTM Standard C475',
            'Coverage: Average 18 lbs/350 ft (8.16 kg/35m)',
            'Freezing Sensitivity: None once set and dried.',
            'Storage: Keep dry and avoid extreme temperature variations. Store on shelves or pallets and not directly on concrete floors or against masonry walls. Close open bags as air tight as possible.',
            'Packaging: 18 lb (8.16 kg) bags'
          ]
        },
        {
          type: 'paragraph',
          content: 'Finish Line Setting Compound is a "Lightweight" setting type compound which is chemically activated. Unlike ready mixed compounds which dry and become hard over time Finish Line Setting Compound\'s hardening action is time controlled. Finish Line Setting Compound can be used for pre-filling, taping, bedding and finish coating. Finish Line Setting Compound provides superior bond strength with low shrinkage. It\'s excellent for heavy fills, laminating gypsum panels and is resistant to cracking. Finish Line Setting Compound is virtually unaffected by high humidity.'
        },
        {
          type: 'features',
          title: 'Applications',
          items: [
            'Easy Sanding',
            'Less weight provides for easier handling',
            'Hassle free clean up',
            'Controlled set time',
            'Shrinkage virtually eliminated',
            'Complete patches in one trip'
          ]
        },
        {
          type: 'paragraph',
          content: 'Mix only the amount of compound which can be applied in the designated set time. In a plastic container, add contents of bag to approximately 1 gallon of clean drinkable water. Mix using a mechanical mixer or by hand. Initially mix about 30 seconds so that the compound and water are blended. Mix to desired consistency, usually an additional 30 seconds. At this time you can add small amounts of powder or water as necessary to obtain the desired consistency. Avoid over mixing as this will reduce workability and accelerate setting action.'
        },
        {
          type: 'paragraph',
          content: 'Air, water, mix and surface temperature must be maintained at 45 F during application. Apply sufficient coats to level surface; smooth before setting begins. Wait until preceding coat is hard though not necessarily dry before applying each new coat. Avoid dust by wet sanding joints rather than dry sanding.'
        },
        {
          type: 'features',
          title: 'Precautions',
          items: [
            'Hardening action cannot be prevented or delayed by dilution with water',
            'Do not mix with any other material. Use only clean drinkable water',
            'Dirty tools and/or dirty water will shorten set time',
            'Lower temperatures will lengthen set times & higher temperatures will shorten set times',
            'Excessive mixing will shorten set time'
          ]
        },
        {
          type: 'paragraph',
          content: 'When mixing and/or dry sanding this product wear eye protection and a NIOSH/MSHA approved repirator. Dust created when dry sanding or mixing may cause eye, nose, throat or upped respiratory irritation. Wet sanding or sponging is recommended where practicable.'
        }
      ],
      msdsSheet: 'assets/MSDS_ Finish_Line_Setting_Joint_Compounds.pdf'
    },
    {
      id: 'drywall-joint-tape',
      name: 'Drywall Joint Tape',
      subtitle: 'MSDS Sheet | Product Details',
      image: 'assets/finish-line-drywall.png',
      contentBlocks: [
        {
          type: 'paragraph',
          content: 'Drywall Joint Tape is a quality tape designed for use with joint compound to reinforce Gypsum board joints and corners prior to painting, texturing or wallpapering.'
        },
        {
          type: 'features',
          title: 'Key Features',
          items: [
            'Tape is manufactured from a special fibered-paper with added tensile strength to help prevent tearing, wrinkling or stretching.',
            'Joint tape is available with Spark perforations, which help prevent blistering.',
            'Tape is roughed on both sides for superior bonding and holding power.',
            'Tape has precision-matched center-crease for easy and accurate corner applications.',
            'Designed for use with all quality joint compounds on the market today.'
          ]
        },
        {
          type: 'features',
          title: 'Applications',
          items: [
            'Tape should always be stored in closed cartons at normal room temperatures in an enclosed dry area.',
            'When applying Drywall Joint Tape, follow the printed recommendations of the compound manufacturer. Apply tape only within their recommended minimum and maximum temperature range.',
          ]
        },
        {
          type: 'paragraph',
          content: 'Follow printed instructions on the joint compound container for mixing (if necessary) and use of compound prior to and during tape application.'
        }
      ],
      msdsSheet: 'assets/MSDS_Finish_Line_Dry_Wall_Joint_Tape.pdf'
    },
    {
      id: 'finish-coat',
      name: 'Finish Coat',
      subtitle: 'MSDS Sheet | Product Details Product Specifications',
      image: 'assets/finish-coat.png',
      contentBlocks: [
        {
          type: 'paragraph',
          content: 'Finish Line Finish Coat Drywall Surfacer is a professional quality ready to use sprayable drywall surfacer used to produce a level 5 finish on gypsum wallboard.'
        },
        {
          type: 'features',
          title: 'Product Data:',
          items: [
            'Coverage: Average coverage: 75-100 sq. ft/gal. Coverage will vary depending on methods of application and surface porosity.',
            'Storage: Protect from freezing or overheating and Finish Line Finish Coat will have a shelf life of up to 1 year, under proper storage conditions.',
            'Available Packaging: 5 gal. pail white or tinted 275 gal. tote white or tinted'
          ]
        },
        {
          type: 'features',
          title: 'Applications',
          items: [
            'Factory pre mixed',
            'Contractor and job site formulated',
            'Sandable and patchable',
            'Superior Application Characteristics',
            'Resistant to abuse damage',
            'Conceals most sanding fuzz'
          ]
        },
        {
          type: 'paragraph',
          content: 'Maintain 50� F working temperature until dry, avoid excessive heat and direct sunlight or freezing conditions.'
        },
        {
          type: 'paragraph',
          content: 'Average coverage: 75-100 sq. ft/gal. Coverage will vary depending on methods of application and surface porosity.'
        },
        {
          type: 'features',
          title: '',
          items: [
            '5 gal. pail white or tinted',
            '275 gal. tote white or tinted'
          ]
        },
        {
          type: 'paragraph',
          content: 'Finish wallboard to a Level 4 finish as described in ASTM C840 and GA-214, fix all paper tears and blisters, keep sanding to a minimum and remove any excesses sanding dust. Sweep floors to prevent dust and debris from being disturbed during the application process. Mask all surfaces that will not be covered.\nApply Finish Coat with an airless spray machine using a .623 tip or larger with a minimum pump capacity of 1.0 gpm. Apply a 14 mil coat for best results. Material pressure should be limited to 3000 psig at the machine. Clean up equipment with warm soapy water and rinse with clean tap water.\nFinish Coat may be sanded to remove imperfections, overspray, or to yield a smoother surface.'
        },
        {
          type: 'specifications',
          title: 'Precautions',
          items: [
            'Wet sanding is recommended',
            'Use eye protection and a respirator (OSHA approved) while applying',
            'Do not ingest',
            'Keep out of reach of children',
            'This product is intended for interior use only'
          ]
        }
      ],
      msdsSheet: 'assets/MSDS_Finish_Line_Coat.pdf',
      productSpecs: 'assets/Finish_Line_Coat_Product_Information.pdf'
    },
    {
      id: 'touch-up-joint-compound',
      name: 'Touch Up Joint Compound',
      subtitle: 'MSDS Sheet | Product Details Product Specifications',
      image: 'assets/finish-line-touchup.png',
      contentBlocks: [
        {
          type: 'paragraph',
          content: 'Finish Line Joint Compounds are professional quality factory pre mixed vinyl based compounds. They are designed for embedding drywall tape, finishing wallboard joints, patching, fasteners, corner bead and drywall trims. They also can be used for skim-coating, simple hand textures and patching cracks in plaster walls.'
        },
        {
          type: 'features',
          title: 'Product Data',
          items: [
            'Coverage: 120 to 155 lb for every 1200 sq. foot of gypsum board (Depending on conditions of application)',
            'Storage: Protect from freezing or overheating and Finish Line products will have a shelf life of 1 year, under proper storage conditions.',
            'Finish Line Touch-Up Joint Compound is available in the 3.5 gallon pail.'
          ]
        },
        {
          type: 'paragraph',
          content: 'Meets ASTM C475-89 (standard specification for joint compound and joint tape for finishing gypsum wallboard) and OSHA safety requirements'
        },
        {
          type: 'features',
          title: 'Advantages',
          items: [
            'Fast drying',
            'Blue tinted',
            'Factory pre mixed',
            'Contractor and job site formulated',
            'Easy to sand',
            'Approximately 20% lighter than standard joint compound',
            'Low shrinkage and crack resistant',
            'Superior Application Characteristics',
            'Excellent Adhesion'
          ]
        },
        {
          type: 'features',
          title: 'Storage of Finish Coat:',
          items: [
            'Maintain 50o F minimum working temperature until dry and stable, avoid excessive heat, direct sunlight or freezing conditions.'
          ]
        },
        {
          type: 'features',
          title: 'Coverage:',
          items: [
            '3.5 gallons covers at least 500 sq ft depending on job conditions and methods of applications.'
          ]
        },
        {
          type: 'features',
          title: 'Available Packaging:',
          items: [
            '3.5 gal. pail'
          ]
        },
        {
          type: 'paragraph',
          content: 'Surface should be dry and clean prior to application, final wallboard finish should meet requirements of the five levels of gypsum board finish approved by the gypsum association.'
        },
        {
          type: 'features',
          title: 'Precautions',
          items: [
            'Wet sanding is recommended to avoid creating dust',
            'Use eye protection and a respirator (OSHA approved) when dry sanding',
            'Do not ingest',
            'May contain mica, talc, limestone, perlite, plaster, clay and latex',
            'Keep out of reach of children'
          ]
        }
      ],
      msdsSheet: 'assets/MSDS_Finish_Line_TouchUp_Joint_Compounds.pdf',
      productSpecs: 'assets/Finish_Line_TouchUp_Product_Information.pdf'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}