'use strict';

// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
var Grommet = {
  // Components
  Accordion: require('./components/Accordion'),
  AccordionPanel: require('./components/AccordionPanel'),
  Anchor: require('./components/Anchor'),
  App: require('./components/App'),
  Article: require('./components/Article'),
  Box: require('./components/Box'),
  Brick: require('./components/Brick'),
  Bricks: require('./components/Bricks'),
  Button: require('./components/Button'),
  Calendar: require('./components/Calendar'),
  Carousel: require('./components/Carousel'),
  Chart: require('./components/Chart'),
  CheckBox: require('./components/CheckBox'),
  Columns: require('./components/Columns'),
  DateTime: require('./components/DateTime'),
  Distribution: require('./components/Distribution'),
  Footer: require('./components/Footer'),
  Form: require('./components/Form'),
  FormField: require('./components/FormField'),
  FormFields: require('./components/FormFields'),
  Header: require('./components/Header'),
  Heading: require('./components/Heading'),
  Headline: require('./components/Headline'),
  Image: require('./components/Image'),
  ImageField: require('./components/ImageField'),
  Grommet: require('./components/Grommet'),
  Label: require('./components/Label'),
  Layer: require('./components/Layer'),
  Legend: require('./components/Legend'),
  List: require('./components/List'),
  ListItem: require('./components/ListItem'),
  Login: require('./components/Login'),
  LoginForm: require('./components/LoginForm'),
  Map: require('./components/Map'),
  Markdown: require('./components/Markdown'),
  Menu: require('./components/Menu'),
  Meter: require('./components/Meter'),
  Notification: require('./components/Notification'),
  NumberInput: require('./components/NumberInput'),
  Paragraph: require('./components/Paragraph'),
  RadioButton: require('./components/RadioButton'),
  Search: require('./components/Search'),
  SearchInput: require('./components/SearchInput'),
  Section: require('./components/Section'),
  Sidebar: require('./components/Sidebar'),
  Split: require('./components/Split'),
  SkipLinkAnchor: require('./components/SkipLinkAnchor'),
  SkipLinks: require('./components/SkipLinks'),
  SunBurst: require('./components/SunBurst'),
  SVGIcon: require('./components/SVGIcon'),
  Tab: require('./components/Tab'),
  Table: require('./components/Table'),
  TableRow: require('./components/TableRow'),
  Tabs: require('./components/Tabs'),
  Tiles: require('./components/Tiles'),
  Tile: require('./components/Tile'),
  Timestamp: require('./components/Timestamp'),
  Title: require('./components/Title'),
  Topology: require('./components/Topology'),
  Value: require('./components/Value'),
  Video: require('./components/Video'),
  Object: require('./components/Object'),
  TBD: require('./components/TBD'),
  Icons: {
    Grommet: require('./components/icons/Grommet'),
    Spinning: require('./components/icons/Spinning'),
    Status: require('./components/icons/Status'),
    Base: require('./index-icons')
  },
  // Utils
  Cookies: require('./utils/Cookies'),
  DOM: require('./utils/DOM'),
  KeyboardAccelerators: require('./utils/KeyboardAccelerators'),
  Locale: require('./utils/Locale'),
  Rest: require('./utils/Rest'),
  RestWatch: require('./utils/RestWatch'),
  Validator: require('./utils/Validator')
};

module.exports = Grommet;