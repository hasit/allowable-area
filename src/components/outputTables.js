import React, {Component} from 'react';
import {find, includes, map} from 'lodash';

import {
  heightAboveGradePlane,
  storiesAboveGradePlane,
  allowableArea,
  occupancyGroupsOptions,
} from '../common';

import {
  CustomTable1,
  CustomTable2,
  CustomTable3,
  CustomTable4,
} from './customTables';

export default class OutputTables extends Component {
  renderCustomTables = (pr, fi) => {
    return map (pr.occupancyGroups, og => {
      let height = find (heightAboveGradePlane, function (h) {
        return includes (h.occupancyClassification, og);
      }).typeOfConstruction;
      let story = find (storiesAboveGradePlane, function (s) {
        return includes (s.occupancyClassification, og);
      }).typeOfConstruction;
      let area = find (allowableArea, function (a) {
        return includes (a.occupancyClassification, og);
      }).typeOfConstruction;

      let groupText = find (occupancyGroupsOptions, function (g) {
        return g.value === og;
      }).text;

      if (
        og === 'a1' ||
        og === 'a2' ||
        og === 'a3' ||
        og === 'a4' ||
        og === 'a5' ||
        og === 'b' ||
        og === 'e' ||
        og === 'f1' ||
        og === 'f2' ||
        og === 'h2' ||
        og === 'h3' ||
        og === 'h4' ||
        og === 'h5' ||
        og === 'i11' ||
        og === 'i12' ||
        og === 'i2' ||
        og === 'i3' ||
        og === 'i4' ||
        og === 'm' ||
        og === 's1' ||
        og === 's2' ||
        og === 'u'
      ) {
        return (
          <CustomTable1
            key={og}
            pr={pr}
            ff={fi.frontageFactor}
            height={height}
            story={story}
            area={area}
            groupText={groupText}
          />
        );
      } else if (og === 'h1') {
        return (
          <CustomTable2
            key={og}
            pr={pr}
            ff={fi.frontageFactor}
            height={height}
            story={story}
            area={area}
            groupText={groupText}
          />
        );
      } else if (og === 'r1' || og === 'r2') {
        return (
          <CustomTable3
            key={og}
            pr={pr}
            ff={fi.frontageFactor}
            height={height}
            story={story}
            area={area}
            groupText={groupText}
          />
        );
      } else if (og === 'r3' || og === 'r4') {
        return (
          <CustomTable4
            key={og}
            pr={pr}
            ff={fi.frontageFactor}
            height={height}
            story={story}
            area={area}
            groupText={groupText}
          />
        );
      }
    });
  };

  render () {
    const {pr, fi} = this.props;

    const tables = this.renderCustomTables (pr, fi);

    return (
      <div style={{marginTop: '1em'}} className="tables">
        {tables}
      </div>
    );
  }
}
