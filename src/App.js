import React, { Component } from "react";
import "./App.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { ListGroup, ListGroupItem, Input } from "reactstrap";

var initialMarkers = [
  {
    formatted_address: "Knaackstraße 97, 10435 Berlin, Germany",
    geometry: {
      location: {
        lat: 52.5395127,
        lng: 13.4144274
      },
      viewport: {
        northeast: {
          lat: 52.54088017989272,
          lng: 13.41590012989272
        },
        southwest: {
          lat: 52.53818052010728,
          lng: 13.41320047010728
        }
      }
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    id: "36a04e8134b47e1161d987497f2dd9bdb0f3487e",
    name: "SODA Club",
    photos: [
      {
        height: 3024,
        html_attributions: [
          '\u003ca href="https://maps.google.com/maps/contrib/113526011864730671318/photos"\u003eNina Kunath\u003c/a\u003e'
        ],
        photo_reference:
          "CmRaAAAAK5Td5PNbGAnVWs0V9bCW_r3dLXX9ezIBe0VhjWAs7X12QdsLysN5O7DrXd4oLKgvxMqeuURMBGHc-rJg4dN8AC7jcV0Ibo2fMSq31YdquMJV_r4ubG3vvI2ztX4LTAEfEhC08MysGjbUXk0z91QdZYcfGhRIRnl1bSyKGAynBUF6Tdhhwe3QQw",
        width: 4032
      }
    ],
    place_id: "ChIJyxITSP5RqEcR2ZUiNxa9ppU",
    plus_code: {
      compound_code: "GCQ7+RQ Berlin, Germany",
      global_code: "9F4MGCQ7+RQ"
    },
    rating: 3.4,
    reference:
      "CmRbAAAAb0Fi5l6iJ-eIsvDWR9ZWjY4i0niIaS_F1tPW0-p6nmTS9vVxwqxaSFclsC4jexLJ7O61cQfg4sye3B-L7W80U-AJnxTttZy88UvM7u2kXCvQ9e2TY88xhbfCZ9b7tyVFEhC4QDTLWuTGmrDf4wr0TV-iGhRaHX69xMR1-f9M9wYwCjuFJliH6w",
    types: ["night_club", "bar", "point_of_interest", "establishment"]
  },
  {
    formatted_address: "Dunckerstraße 64, 10439 Berlin, Germany",
    geometry: {
      location: {
        lat: 52.5461718,
        lng: 13.4237561
      },
      viewport: {
        northeast: {
          lat: 52.54748142989272,
          lng: 13.42522277989272
        },
        southwest: {
          lat: 52.54478177010727,
          lng: 13.42252312010728
        }
      }
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    id: "b3eb2de7db11fe43de9897d35fb30caa1f9e145f",
    name: "Dunckerclub",
    opening_hours: {
      open_now: true
    },
    photos: [
      {
        height: 2988,
        html_attributions: [
          '\u003ca href="https://maps.google.com/maps/contrib/113455108000879109259/photos"\u003eAbe Woll\u003c/a\u003e'
        ],
        photo_reference:
          "CmRaAAAAVCL2oPjrANelfL7e3g1jteccTqxq8FC7L2Zb2tJSeLLYCg9IdPXR3x6W4oVDkqZaD4N7OxlMmxmgXDdpl5Dit-Tq7eYjDWCdp7T1LwcDdy8zhFLX3aCoKWGR7r1dN1b7EhCEv8taOoqWwV_Vi5ycRnMCGhT9K2pbgEN0QGM2Yyr2-vVrv96MmQ",
        width: 5312
      }
    ],
    place_id: "ChIJNYPFK_lNqEcRojGW1x-Yhos",
    plus_code: {
      compound_code: "GCWF+FG Berlin, Germany",
      global_code: "9F4MGCWF+FG"
    },
    rating: 4.4,
    reference:
      "CmRbAAAAKZDJcP1bg0Nk9wG59xiNF465Dwb5EXFDKbHs9cMTG_UQRTjF_Ry-IyxpfjeHaeT_iDZ-VpMJPI6qhyqptj_g-U4gypRK3UxY8kwJsVedq6tnM6j4hSvCySdGGP0D8KerEhCQzBuY38nOpT4GGYwVXFBWGhQtJF5nxz7PGCpO_4tgzTa_dVxEHw",
    types: ["night_club", "point_of_interest", "establishment"]
  },
  {
    formatted_address: "Schönhauser Allee 36, 10435 Berlin, Germany",
    geometry: {
      location: {
        lat: 52.538177,
        lng: 13.412599
      },
      viewport: {
        northeast: {
          lat: 52.53952332989272,
          lng: 13.41383472989272
        },
        southwest: {
          lat: 52.53682367010727,
          lng: 13.41113507010728
        }
      }
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    id: "1dfa95c36529492b874edbc65717e7aac2f2714f",
    name: "Frannz-Club",
    opening_hours: {
      open_now: true
    },
    photos: [
      {
        height: 3265,
        html_attributions: [
          '\u003ca href="https://maps.google.com/maps/contrib/102375853633784492083/photos"\u003eJoachim Dreimann\u003c/a\u003e'
        ],
        photo_reference:
          "CmRaAAAAk-jif_QiSV4KuQjIEtBqcu71wTNbJRAoQQwpTp637OUSWLwYISScXlTEvyE6XkpR_d3b8mAIz8mdMud4QPSOW74dQIQBeOtJ_qqyNTSJbqXaDdKJZw3eh4eA1Ydg46olEhBMkYOAEcukH8CE1-K_P6FJGhSctdNkqOH-xKpWlSD9PyWH99FisA",
        width: 4898
      }
    ],
    place_id: "ChIJfQqMQv5RqEcRKf6iOf6Yg4Q",
    plus_code: {
      compound_code: "GCQ7+72 Berlin, Germany",
      global_code: "9F4MGCQ7+72"
    },
    rating: 4.2,
    reference:
      "CmRbAAAA9C2sTqq-dN1Mb0xLeD7YiOx_i5sFdxBBTpJ2TY7355iGWQnWbulZRkRDLD_4nDCo2w1s1jU5hudzNzsOupTUfZmw09z9tXOYzNy4dZoxSvp0qnXpPmGDJ1jxWCqIsLpGEhCq2MIMbOQv0x_bxcHICiDMGhSGrWq-PI9KOmLFNPy1AAKWQFKbhQ",
    types: [
      "night_club",
      "cafe",
      "bar",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment"
    ]
  },
  {
    formatted_address: "Pappelallee 65, 10437 Berlin, Germany",
    geometry: {
      location: {
        lat: 52.54543529999999,
        lng: 13.4167958
      },
      viewport: {
        northeast: {
          lat: 52.54674487989272,
          lng: 13.41824867989272
        },
        southwest: {
          lat: 52.54404522010728,
          lng: 13.41554902010728
        }
      }
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    id: "6c0a753690f365aeb4c1e6f7a620f8882961616a",
    name: "Phono Club",
    photos: [
      {
        height: 2976,
        html_attributions: [
          '\u003ca href="https://maps.google.com/maps/contrib/109375825875962760477/photos"\u003eFelix Kosel\u003c/a\u003e'
        ],
        photo_reference:
          "CmRaAAAAsyAOIrJ3_1SgOPR_oEPrRUnh6BpgAvC2emmesgsH4VKMconamb-atfyFjwfwZqO6C9_TJJQ4VP4gzmopS5DybYxGqYYG6Dd6cvrkIuusNKZpQq9O8Z1rXh4jsPdMwadcEhDUDldLxobFz_EgLwzLj4gwGhRQ2d9PogeLqVcrkKvbxZbUNEruAw",
        width: 3968
      }
    ],
    place_id: "ChIJq2OP6wBSqEcRvRyCSxN6Vh0",
    plus_code: {
      compound_code: "GCW8+5P Berlin, Germany",
      global_code: "9F4MGCW8+5P"
    },
    rating: 4.3,
    reference:
      "CmRbAAAAtRBGZX11KBMZENVLkmn25jPAwKhaCSD84fMqDoyugt1wfh3mDovvUhmdj55T6ZXKs2kIn4rnJYI912xSiJVw2PEzJViL8cDhlnrazRYWMzaJiX7AVi3x9ROTQqA7SosqEhDkZ2gINF1txwoYlBV-IIw3GhTKOry--WoHUsxGHP7Wz60PKF3E1g",
    types: ["night_club", "point_of_interest", "establishment"]
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerObjects: [],
      markers: initialMarkers,
      selectedPlace: {
        name: ""
      }
    };
  }

  onMarkerMounted = element => {
    this.setState(prevState => ({
      markerObjects: [...prevState.markerObjects, element.marker]
    }));
  };

  onMarkerClick = (props, marker, e) => {
    console.log(marker);
  };

  onMarkerListClick = (marker, e) => {
    const index = this.state.markerObjects.findIndex(m => {
      return m.name === marker.name;
    });
    const tabom = this.state.markerObjects[index];
    console.log(tabom);
    console.log(tabom.getAnimation());
    tabom.setAnimation(window.google.maps.Animation.BOUNCE);
    setTimeout(function() {
      tabom.setAnimation(null);
    }, 700);
  };

  handleKeyUp = e => {
    this.setState({
      markers: initialMarkers.filter(marker =>
        marker.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    });
  };

  render() {
    // const mapStyle = {
    //   position: "relative",
    //   width: "80%",
    //   height: "100%"
    // };
    return (
      <div className="main-wrapper">
        <div className="search-input">
          <Input type="text" onKeyUp={this.handleKeyUp} placeholder="Filter" />
          <ListGroup>
            {initialMarkers.map(marker => {
              return (
                <ListGroupItem
                  onClick={this.onMarkerListClick.bind(null, marker)}
                  key={marker.id}
                >
                  {marker.name}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </div>
        <div className="map-wrapper">
          <Map
            google={this.props.google}
            zoom={14}
            initialCenter={{
              lat: 52.553266,
              lng: 13.41552
            }}
          >
            {this.state.markers.map(marker => {
              return (
                <Marker
                  animation={this.props.google.maps.Animation.DROP}
                  ref={this.onMarkerMounted}
                  key={marker.id}
                  onClick={this.onMarkerClick}
                  title={marker.title}
                  name={marker.name}
                  position={marker.geometry.location}
                />
              );
            })}
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAqjyL80DwXnkqVQ_NKXMOpFH_guLDGVhs"
})(App);
