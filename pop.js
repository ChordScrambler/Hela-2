// Select modal elements
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');

// Select all "warpper" elements
const wrappers = document.querySelectorAll('.warpper');

// Check if wrappers are being selected correctly
console.log(wrappers);  // Should log all .warpper elements

// Add event listeners to all "warpper" elements
wrappers.forEach((wrapper, index) => {
    // Log each wrapper to ensure they are being processed
    console.log(`Wrapper ${index}:`, wrapper);

    wrapper.addEventListener('click', () => {
        console.log(`Wrapper clicked! Index: ${index}`); // Check if click event triggers

        // Set the modal text based on the wrapper clicked
        const modalContent = [
            `In February 1951, Henrietta Lacks, a young African American woman, visited Johns Hopkins Hospital to treat her aggressive cervical cancer. When in her biopsy, doctors took a sample of her tumor cells with her permission or consent.

            The sample was taken to George Gey, a prominent scientist, and when studying her cells Gey realized they were immortal. Most cell lines die after a couple divisions, but in this case her cells continued to replicate indefinitely. He named them HeLa cells (after Henrietta Lacks’s name).

            Before then in 1951 no other cell line was known to be immortal. This was important as researchers needed a stable line to study.  The endless supply of HeLa cells has allowed scientists to explore complex biological processes and test treatments in ways that would have been near to impossible otherwise. This point marks the beginning of their legacy.
`,
            `During the early 1950’s one of the most feared diseases that was common was polio. Polio affected quite a lot of people, but 1 in around every 200 people had the disease enter their spinal cord resulting in incurable paralysis or even death.

            One of the first major uses of HeLa cells was the attempt to prevent polio. In 1952  Dr. Jonas Salk, a virologist and medical researcher, was working on a vaccine to eradicate polio. He needs an effective and most importantly safe way to test his prototypes. HeLa cells, which could be grown in massive quantities, provided an ideal platform.

            HeLa cells provided Salk and other researchers with an ideal medium for growing large quantities of the poliovirus. They discovered that HeLa cells could be infected with the poliovirus and would support its reproduction. This was groundbreaking because it meant researchers could now grow the virus in vast amounts using a human cell line rather than relying on animal models or small-scale, difficult-to-maintain cultures.

            The polio vaccine was ready for testing by 1954, largely due to the ability to produce and study the virus on a mass scale using HeLa cells. By 1955, the vaccine was distributed widely, and the number of polio cases began to reduce rapidly. HeLa cells had effectively enabled researchers to create a vaccine for one of the most deadly viruses of the mid 1900’s.
`,
            `During the mid 1900s, cancer research was still in its infancy. Limited understanding of how cancer cells grew, spread, or responded to different treatments was still apparent. Studying human cancer cells outside the body was extremely challenging due to their limited survival time in lab conditions. At least this was the reality until one particular breakthrough in the early 1950’s.

            HeLa cells provided a groundbreaking solution. Since they were the first immortal human cell line able to survive and multiply indefinitely under the right lab conditions. For the first time, researchers had a repeatable model of human cancer cells that could be manipulated, experimented upon, and observed over long periods of time.

            In 1953, scientists utilized HeLa cells to study the impact of radiation on human tissue, aiming to understand both cancer and potential treatments. Radiation therapy was already an emerging cancer treatment, but its effects on human cells were not well understood. By exposing HeLa cells to various radiation levels, researchers observed the DNA damage and process to repair that occurred in cancerous cells.
            These studies revealed how radiation targets cancer cells. HeLa cells provided a model for exploring cancer biology, enabling researchers to understand radiation therapy approaches and set safety ceilings for radiation exposure, benefiting both cancer patients and workers in high-radiation fields.
`,
            `HeLa cells were central for the first work in cloning, particularly cellular cloning techniques. Researchers sought ways to produce identical cells to study how certain genetic traits were passed on.

            HeLa cells’ rapid, continuous division made them ideal for testing cloning methodologies. In 1954, scientists succeeded in creating cloned human cells by isolating a single HeLa cell and allowing it to divide, thus producing a colony of identical cells.

            This achievement marked one of the earliest forms of human cell cloning, laying the foundation for future advancements in cloning technology. This research has since influenced genetic engineering, stem cell research, and other developments in biology. HeLa cells offered scientists a reliable method to produce consistent cell populations for study.
`,
            `A lot of projects relating to space were tested in the 1960s. One such project/experiment was conducted in the early 1960s questioning how human cells would react to the unique conditions of space. (Conditions such as zero gravity, cosmic radiation etc.)  To study these effects, HeLa cells were sent on satellite Sputnik 6 made by the Soviet Union Space program. This experiment was also tested by NASA  around a decade later in the 1970’s.

            The aboard cells on the satellite experienced some interesting behaviors. Researchers observed changes in cellular structure, function, and division. These new insights provided essential information on how the human body might be able to adapt and survive harsh to outer space conditions. HeLa cells helped demonstrate that cells could survive and replicate in low gravity, but also faced unique challenges, such as altered growth patterns. This research helped tremendously in better understanding how life might thrive in space.
`,
            `After the first cancer findings using HeLa cells were born in the 1950s, this researching method became mainstream in cancer research. Scientists used them to understand the differences between normal and cancerous cells in terms of both growth and division.

            HeLa cells, which originate from Henrietta Lacks’s aggressive cervical cancer tumor, showed the rapid, unregulated growth seen in cancerous cells. Research on HeLa cells revealed the genetic and biochemical mechanisms that drive cancer cell division, helping to identify potential drugs. Additionally, HeLa cells were used to find anti-cancer compounds. This helped aiding the development of chemotherapeutic drugs.

            Insights gained from this HeLa cell studies continued to inform cancer treatment methods, helping improve survival rates and reduce side effects.
`,
            `The use of HeLa cells in HIV/AIDS (Human Immunodeficiency Virus) research marked a significant turning point in understanding and treating the virus. When the HIV/AIDS epidemic surfaced in the 1980’s,scientists urgently needed cellular models to study how HIV affected and interacted with human cells.

            HeLa cells, the immortalized cancer cell line, was the obvious choice. These cells became crucial in this research because of their resilience, rapid reproduction, and adaptability in laboratory settings. By modifying HeLa cells to express certain human immune system receptors, researchers were able to study how HIV entered cells, replicated, and caused cell death.

            The cells also served as a testing object for early antiretroviral drugs. Researchers could evaluate the effects of potential treatments on inhibiting HIV replication. THey could observe how drugs blocked specific viral processes or reduced cell death. This early drug screening was invaluable in developing drugs like AZT (zidovudine), one of the first ever antiretrovirals approved for HIV/AIDS.
`,
            `In 1985, researchers studying cervical cancer discovered a link between HPV (Human Papillomavirus) and HeLa cells, which were originally derived from the cervical tumor.  They identified that HPV infection contributed to the transformation of normal cells into cancerous ones. HeLa cells allowed scientists to isolate HPV strains and study how the virus altered cell growth. This discovery was a turning point in cancer research, ultimately leading to the development of the HPV vaccine.

            The HPV vaccine, introduced in the early 2000s, has since been credited with reducing rates of cervical and other HPV-related cancers. One of the major impacts HeLa cells had on public health by helping prevent a major cancer cause.
`,
            `In 2001 the HeLa cell genome was sequenced. This marked a huge breakthrough in genetics. HeLa cells were known for their rapid and continuous division, and had long been used in labs worldwide for a wide range of biomedical research, but now it was time for genetics research.

            By mapping their genome, scientists were able to uncover the unique genetic landscape of these cells, which revealed numerous mutations and chromosomal abnormalities. This was particularly significant because these alterations mirrored changes often seen in cancer cells, providing valuable insights into the genetic instabilities that drive tumor growth and metastasis.

            The genetic abnormalities identified in HeLa cells served as a powerful resource for studying cancer (wow who would have thought). Researchers found that many of the mutations present in HeLa cells also appeared in tumors from other cancerous tumors. This provided crucial information for understanding how genetic changes can often contribute to cancer.

            Additionally, the information gained from HeLa cells helped identify genetic variability within tumors and thus was born the development of personalized medicine. HeLa cells helped advance our understanding in human genetics, and the potential for personalized treatment strategies.
`,
            `SARS-CoV-2 is one of the most infamous viruses in the modern era causing one of the biggest international pandemics.  HeLa cells played an important role in studying the SARS-CoV-2 virus during the COVID-19 pandemic. During the spread of the virus researchers were planning to create a vaccine to cure SC2.

            Researchers used HeLa cells modified to express ACE2 receptors (the entry point for SARS-CoV-2) to study how the virus infected and interacted with human cells.
            These studies provided insights into the virus that helped the development of effective vaccines and treatments.

            HeLa cells were also used to test the effectiveness of mRNA-based vaccines (like Pfizer-BioNTech and Moderna) by exposing the cells to the virus after the vaccines had been administered. Researchers monitored the ability of these vaccines to induce an immune response in HeLa cells and prevent viral infection.


            By understanding how the virus entered cells and replicated, scientists could accelerate vaccine testing and improve antiviral drugs. This vaccine marks the most recent of the important breaks made possible by HeLa cells. Although there are some seriously wrong morals behind the method of obtaining these cells there is no doubt that they have helped mankind for the last 70 + years.
            This hereby concludes the evergoing timeline of the immortal HeLa cells.
`
        ];


        // Set the modal content based on the wrapper clicked
        modalText.textContent = modalContent[index];

        // Show the modal
        modal.classList.add('show');

        modalText.textContent = modalContent[index];
        // Show the modal
        modal.classList.add('show2');
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    console.log('Close button clicked');  // Log when the close button is clicked
    modal.classList.remove('show');
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        console.log('Modal background clicked');  // Log when clicking outside the modal content
        modal.classList.remove('show');
    }
});
