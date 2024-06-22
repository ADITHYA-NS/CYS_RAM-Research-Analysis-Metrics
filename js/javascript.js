
function openTab(tabName) {
  var i, tabContent;

  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  document.querySelectorAll('button').forEach(function(tabButton) {
    tabButton.classList.remove('active-tab');
  });
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add('active-tab');
}

function show_hide(x) {
  x.classList.toggle("change");
  var dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') ? 'block' : 'none';
}
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("7f9f9c41b5d103050275e9c3258d9d45e4a4fcec333b24bff50bd3ddb4c08f09");


// Define author IDs and their corresponding callbacks
const authors = [
  { id: "Xl_P9V0AAAAJ", name: "Dr. M. Sethumadhavan" },
  { id: "nlt0DD4AAAAJ", name: "Dr. Chungath Srinivasan" },
  { id: "K2n1nh0AAAAJ", name: "Dr. Lakshmy K.V" },
  { id: "8AwtAWsAAAAJ", name: "Dr. Amritha P P" },
  { id: "NHVcW84AAAAJ", name: "Dr. Praveen K" },
  { id: "W6nvRkQAAAAJ", name: "Mr. Ashok Kumar Mohan" },
  { id: "QdXcVjUAAAAJ", name: "Mr. Saurabh Shrivastava" },
  { id: "-DjvKqgAAAAJ", name: "Mr. Ramaguru Radhakrishnan" },
  { id: "jaxJad8AAAAJ", name: "Dr. Sangeetha Viswanathan" },
  { id: "ZWxL_tkAAAAJ", name: "Ms. Ambili K N" },
  { id: "D9kO6VgAAAAJ", name: "Mr. Rajeev K" },
  { id: "8q2B8WYAAAAJ", name: "Mr. Aravind Vishnu S S" },
  { id: "weIsDiIAAAAJ", name: "Mr. Harish R" },
  { id: "ZWxL_tkAAAAJ", name: "Ms. Merly Anne Philip" },
  { id: "ZWxL_tkAAAAJ", name: "Mr. Joseph Nelson" },
  { id: "ZWxL_tkAAAAJ", name: "Ms. Zeenath A U" }
];
// Callback function for search.json
function callback(data) {
  author = data['author']['name'];
  publications = data['articles'].length;
  citations_c = data['cited_by']['table'][0]['citations']['all'];
  hindex_c = data['cited_by']['table'][1]['h_index']['all'];
  i10index_c = data['cited_by']['table'][2]['i10_index']['all'];
  console.log( author + " has " + publications + " publications ~~~ citations : " + citations_c + ", h-index : " + hindex_c + ", i10-index : " + i10index_c);
  const outputHTML =  `
  <center style="margin-top:60px;">
    <table style="border-style:solid;border-width:4px;">
      <tr style="border-style:solid; border-width:4px;"><th colspan="3">Author Information</th></tr>
      <td><b>Name : </b></td>
      <td style="text-align:center;">${author}</td>
      <tr style="border-style:solid; border-width:4px;"><th colspan="3">Publication Details</th></tr>
      <td><b>Publications : </b></td>
      <td style="text-align:center;">${publications}</td>
      </tr>
      <td><b>Citations: </b></td>
      <td style="text-align:center;">${citations_c}</td>
      </tr>
      </tr>
      <td><b>h-index : </b></td>
      <td style="text-align:center;">${hindex_c}</td>
      </tr>
      </tr>
      <td><b>i10-index:</b></td>
      <td style="text-align:center;">${i10index_c}</td>
    </table>
  </center>`;
  
  
  const ramImagesDiv = document.querySelector('.ram_images');
  if (ramImagesDiv) {
    ramImagesDiv.style.display = 'none';
  }
  document.getElementById('output').innerHTML = outputHTML;
}
search.json({ engine: "google_scholar_author", author_id: "Xl_P9V0AAAAJ", hl: "en" }, callback)
// Fetch data from Google Scholar
function checkeventbyID (event) {
  
  alert(`Submitted Successfully!`);
  const enteredId = document.getElementById('Search_by_Id').value.trim();
  console.log(enteredId);

  const author = authors.find(author => author.id === enteredId);
  if (author) {
    search.json({ engine: "google_scholar_author", author_id: author.id, hl: "en" }, callback);
  } else {
    alert(`Author ID not found`);
  }

  event.preventDefault();
  return false;
}

function checkevent_research_scholar(event){
  alert(`Submitted Successfully!`)
  const rs_name=document.getElementById('rsname')
  const rs_year=document.getElementById('rsyear')
  const rs_type=document.getElementById('rstype')

}
