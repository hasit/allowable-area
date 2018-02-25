import React from 'react';
import {Table} from 'semantic-ui-react';

function calculateArea (b, s, ff) {
  if (b === 'UL' || s === 'UL') {
    return 'UL';
  } else if (b === 'NP' || s === 'NP') {
    return 'NP';
  } else {
    return s + b * ff;
  }
}

const tHeader = (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell rowSpan="2" colSpan="3">
        Occupancy Classification
      </Table.HeaderCell>
      <Table.HeaderCell colSpan="2">Type I</Table.HeaderCell>
      <Table.HeaderCell colSpan="2">Type II</Table.HeaderCell>
      <Table.HeaderCell colSpan="2">Type III</Table.HeaderCell>
      <Table.HeaderCell colSpan="1">Type IV</Table.HeaderCell>
      <Table.HeaderCell colSpan="2">Type V</Table.HeaderCell>
    </Table.Row>
    <Table.Row>
      <Table.HeaderCell>A</Table.HeaderCell>
      <Table.HeaderCell>B</Table.HeaderCell>
      <Table.HeaderCell>A</Table.HeaderCell>
      <Table.HeaderCell>B</Table.HeaderCell>
      <Table.HeaderCell>A</Table.HeaderCell>
      <Table.HeaderCell>B</Table.HeaderCell>
      <Table.HeaderCell>HT</Table.HeaderCell>
      <Table.HeaderCell>A</Table.HeaderCell>
      <Table.HeaderCell>B</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export const CustomTable1 = ({pr, ff, height, story, area, groupText}) => {
  return (
    <Table celled structured textAlign="center" compact unstackable>
      {tHeader}
      <Table.Body>
        <Table.Row>
          <Table.Cell rowSpan="9">
            {groupText}
          </Table.Cell>
          <Table.Cell rowSpan={height.length}>Height</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={height[0].typeI.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeI.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeII.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeII.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIII.A < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIII.B < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIV.HT < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeV.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeV.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>With Sprinklers</Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeI.A < pr.height}
          >
            {height[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeI.B < pr.height}
          >
            {height[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeII.A < pr.height}
          >
            {height[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeII.B < pr.height}
          >
            {height[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeIII.A < pr.height}
          >
            {height[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeIII.B < pr.height}
          >
            {height[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeIV.HT < pr.height}
          >
            {height[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeV.A < pr.height}
          >
            {height[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeV.B < pr.height}
          >
            {height[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell rowSpan={story.length}>Stories</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' || story[0].typeI.A < pr.storiesAboveGrade
            }
          >
            {story[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' || story[0].typeI.B < pr.storiesAboveGrade
            }
          >
            {story[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                story[0].typeII.A < pr.storiesAboveGrade
            }
          >
            {story[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                story[0].typeII.B < pr.storiesAboveGrade
            }
          >
            {story[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                story[0].typeIII.A < pr.storiesAboveGrade
            }
          >
            {story[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                story[0].typeIII.B < pr.storiesAboveGrade
            }
          >
            {story[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                story[0].typeIV.HT < pr.storiesAboveGrade
            }
          >
            {story[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' || story[0].typeV.A < pr.storiesAboveGrade
            }
          >
            {story[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' || story[0].typeV.B < pr.storiesAboveGrade
            }
          >
            {story[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            With Sprinklers
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeI.A < pr.storiesAboveGrade
            }
          >
            {story[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeI.B < pr.storiesAboveGrade
            }
          >
            {story[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeII.A < pr.storiesAboveGrade
            }
          >
            {story[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeII.B < pr.storiesAboveGrade
            }
          >
            {story[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                story[1].typeIII.A < pr.storiesAboveGrade
            }
          >
            {story[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                story[1].typeIII.B < pr.storiesAboveGrade
            }
          >
            {story[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                story[1].typeIV.HT < pr.storiesAboveGrade
            }
          >
            {story[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeV.A < pr.storiesAboveGrade
            }
          >
            {story[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeV.B < pr.storiesAboveGrade
            }
          >
            {story[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell rowSpan={area.length + 2}>Area</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeI.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeI.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeII.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeII.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeIII.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeIII.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeIV.HT < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeV.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeV.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Single Story With Sprinklers</Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeI.A < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeI.B < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeII.A < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeII.B < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeIII.A < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeIII.B < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeIV.HT < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeV.A < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeV.B < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Single Story With Sprinklers and Frontage ({ff})
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeI.A, area[1].typeI.A, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeI.A, area[1].typeI.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeI.B, area[1].typeI.B, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeI.B, area[1].typeI.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeII.A, area[1].typeII.A, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeII.A, area[1].typeII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeII.B, area[1].typeII.B, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeII.B, area[1].typeII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeIII.A, area[1].typeIII.A, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeIII.A, area[1].typeIII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeIII.B, area[1].typeIII.B, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeIII.B, area[1].typeIII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeIV.HT, area[1].typeIV.HT, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeIV.HT, area[1].typeIV.HT, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeV.A, area[1].typeV.A, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeV.A, area[1].typeV.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeV.B, area[1].typeV.B, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeV.B, area[1].typeV.B, ff)}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Multistory With Sprinklers</Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[2].typeI.A < pr.floorAreaOfLargestStory
            }
          >
            {area[2].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[2].typeI.B < pr.floorAreaOfLargestStory
            }
          >
            {area[2].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[2].typeII.A < pr.floorAreaOfLargestStory
            }
          >
            {area[2].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[2].typeII.B < pr.floorAreaOfLargestStory
            }
          >
            {area[2].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[2].typeIII.A < pr.floorAreaOfLargestStory
            }
          >
            {area[2].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[2].typeIII.B < pr.floorAreaOfLargestStory
            }
          >
            {area[2].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[2].typeIV.HT < pr.floorAreaOfLargestStory
            }
          >
            {area[2].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[2].typeV.A < pr.floorAreaOfLargestStory
            }
          >
            {area[2].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[2].typeV.B < pr.floorAreaOfLargestStory
            }
          >
            {area[2].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Multistory With Sprinklers and Frontage ({ff})
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeI.A, area[2].typeI.A, ff) <
                  pr.floorAreaOfLargestStory
            }
          >
            {calculateArea (area[0].typeI.A, area[2].typeI.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeI.B, area[2].typeI.B, ff) <
                  pr.floorAreaOfLargestStory
            }
          >
            {calculateArea (area[0].typeI.B, area[2].typeI.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeII.A, area[2].typeII.A, ff) <
                  pr.floorAreaOfLargestStory
            }
          >
            {calculateArea (area[0].typeII.A, area[2].typeII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeII.B, area[2].typeII.B, ff) <
                  pr.floorAreaOfLargestStory
            }
          >
            {calculateArea (area[0].typeII.B, area[2].typeII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeIII.A, area[2].typeIII.A, ff) <
                  pr.floorAreaOfLargestStory
            }
          >
            {calculateArea (area[0].typeIII.A, area[2].typeIII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeIII.B, area[2].typeIII.B, ff) <
                  pr.floorAreaOfLargestStory
            }
          >
            {calculateArea (area[0].typeIII.B, area[2].typeIII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeIV.HT, area[2].typeIV.HT, ff) <
                  pr.floorAreaOfLargestStory
            }
          >
            {calculateArea (area[0].typeIV.HT, area[2].typeIV.HT, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeV.A, area[2].typeV.A, ff) <
                  pr.floorAreaOfLargestStory
            }
          >
            {calculateArea (area[0].typeV.A, area[2].typeV.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeV.B, area[2].typeV.B, ff) <
                  pr.floorAreaOfLargestStory
            }
          >
            {calculateArea (area[0].typeV.B, area[2].typeV.B, ff)}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export const CustomTable2 = ({pr, ff, height, story, area, groupText}) => {
  return (
    <Table celled structured textAlign="center" compact unstackable>
      {tHeader}
      <Table.Body>
        <Table.Row>
          <Table.Cell rowSpan="7">
            {groupText}
          </Table.Cell>
          <Table.Cell rowSpan={height.length}>Height</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={height[0].typeI.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeI.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeII.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeII.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIII.A < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIII.B < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIV.HT < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeV.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeV.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>With Sprinklers</Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeI.A < pr.height}
          >
            {height[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeI.B < pr.height}
          >
            {height[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeII.A < pr.height}
          >
            {height[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeII.B < pr.height}
          >
            {height[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeIII.A < pr.height}
          >
            {height[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeIII.B < pr.height}
          >
            {height[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeIV.HT < pr.height}
          >
            {height[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeV.A < pr.height}
          >
            {height[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={pr.sprinklers === 'no' || height[1].typeV.B < pr.height}
          >
            {height[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell rowSpan={story.length}>Stories</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' || story[0].typeI.A < pr.storiesAboveGrade
            }
          >
            {story[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' || story[0].typeI.B < pr.storiesAboveGrade
            }
          >
            {story[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                story[0].typeII.A < pr.storiesAboveGrade
            }
          >
            {story[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                story[0].typeII.B < pr.storiesAboveGrade
            }
          >
            {story[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                story[0].typeIII.A < pr.storiesAboveGrade
            }
          >
            {story[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                story[0].typeIII.B < pr.storiesAboveGrade
            }
          >
            {story[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                story[0].typeIV.HT < pr.storiesAboveGrade
            }
          >
            {story[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' || story[0].typeV.A < pr.storiesAboveGrade
            }
          >
            {story[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' || story[0].typeV.B < pr.storiesAboveGrade
            }
          >
            {story[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            With Sprinklers
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeI.A < pr.storiesAboveGrade
            }
          >
            {story[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeI.B < pr.storiesAboveGrade
            }
          >
            {story[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeII.A < pr.storiesAboveGrade
            }
          >
            {story[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeII.B < pr.storiesAboveGrade
            }
          >
            {story[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                story[1].typeIII.A < pr.storiesAboveGrade
            }
          >
            {story[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                story[1].typeIII.B < pr.storiesAboveGrade
            }
          >
            {story[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                story[1].typeIV.HT < pr.storiesAboveGrade
            }
          >
            {story[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeV.A < pr.storiesAboveGrade
            }
          >
            {story[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' || story[1].typeV.B < pr.storiesAboveGrade
            }
          >
            {story[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell rowSpan={area.length + 1}>Area</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeI.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeI.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeII.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeII.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeIII.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeIII.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeIV.HT < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeV.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeV.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Single Story With Sprinklers</Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeI.A < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeI.B < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeII.A < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeII.B < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeIII.A < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeIII.B < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeIV.HT < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeV.A < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeV.B < pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Single Story With Sprinklers and Frontage ({ff})
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeI.A, area[1].typeI.A, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeI.A, area[1].typeI.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeI.B, area[1].typeI.B, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeI.B, area[1].typeI.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeII.A, area[1].typeII.A, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeII.A, area[1].typeII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeII.B, area[1].typeII.B, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeII.B, area[1].typeII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeIII.A, area[1].typeIII.A, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeIII.A, area[1].typeIII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeIII.B, area[1].typeIII.B, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeIII.B, area[1].typeIII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeIV.HT, area[1].typeIV.HT, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeIV.HT, area[1].typeIV.HT, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeV.A, area[1].typeV.A, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeV.A, area[1].typeV.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                calculateArea (area[0].typeV.B, area[1].typeV.B, ff) <
                  pr.floorAreaOfLargestStory ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeV.B, area[1].typeV.B, ff)}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export const CustomTable3 = ({pr, ff, height, story, area, groupText}) => {
  return (
    <Table celled structured textAlign="center" compact unstackable>
      {tHeader}
      <Table.Body>
        <Table.Row>
          <Table.Cell rowSpan="13">
            {groupText}
          </Table.Cell>
          <Table.Cell rowSpan={height.length}>Height</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={height[0].typeI.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeI.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeII.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeII.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIII.A < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIII.B < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIV.HT < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeV.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeV.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>S13D</Table.Cell>
          <Table.Cell
            negative={height[1].typeI.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeI.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeIII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeIII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeIV.HT < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeV.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeV.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>S13R</Table.Cell>
          <Table.Cell
            negative={height[2].typeI.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeI.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeIII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeIII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeIV.HT < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeV.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeV.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>With Sprinklers</Table.Cell>
          <Table.Cell
            negative={height[3].typeI.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeI.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeIII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeIII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeIV.HT < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeV.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeV.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell rowSpan={story.length}>Stories</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={
              story[0].typeI.A < pr.storiesAboveGrade || pr.sprinklers === 'yes'
            }
          >
            {story[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeI.B < pr.storiesAboveGrade || pr.sprinklers === 'yes'
            }
          >
            {story[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeII.A < pr.storiesAboveGrade ||
                pr.sprinklers === 'yes'
            }
          >
            {story[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeII.B < pr.storiesAboveGrade ||
                pr.sprinklers === 'yes'
            }
          >
            {story[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeIII.A < pr.storiesAboveGrade ||
                pr.sprinklers === 'yes'
            }
          >
            {story[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeIII.B < pr.storiesAboveGrade ||
                pr.sprinklers === 'yes'
            }
          >
            {story[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeIV.HT < pr.storiesAboveGrade ||
                pr.sprinklers === 'yes'
            }
          >
            {story[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeV.A < pr.storiesAboveGrade || pr.sprinklers === 'yes'
            }
          >
            {story[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeV.B < pr.storiesAboveGrade || pr.sprinklers === 'yes'
            }
          >
            {story[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>S13R</Table.Cell>
          <Table.Cell
            negative={
              story[1].typeI.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeI.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeII.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeII.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeIII.A < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeIII.B < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeIV.HT < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeV.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeV.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>With Sprinklers</Table.Cell>
          <Table.Cell
            negative={
              story[2].typeI.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeI.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeII.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeII.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeIII.A < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[2].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeIII.B < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[2].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeIV.HT < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[2].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeV.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeV.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell rowSpan={area.length + 2}>Area</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeI.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeI.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeII.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeII.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeIII.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeIII.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeIV.HT < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeV.A < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'yes' ||
                area[0].typeV.B < pr.floorAreaOfLargestStory
            }
          >
            {area[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>S13R</Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeI.A < pr.floorAreaOfLargestStory
            }
          >
            {area[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeI.B < pr.floorAreaOfLargestStory
            }
          >
            {area[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeII.A < pr.floorAreaOfLargestStory
            }
          >
            {area[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeII.B < pr.floorAreaOfLargestStory
            }
          >
            {area[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeIII.A < pr.floorAreaOfLargestStory
            }
          >
            {area[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeIII.B < pr.floorAreaOfLargestStory
            }
          >
            {area[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeIV.HT < pr.floorAreaOfLargestStory
            }
          >
            {area[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeV.A < pr.floorAreaOfLargestStory
            }
          >
            {area[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              pr.sprinklers === 'no' ||
                area[1].typeV.B < pr.floorAreaOfLargestStory
            }
          >
            {area[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Single Story With Sprinklers</Table.Cell>
          <Table.Cell
            negative={
              area[2].typeI.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[2].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeI.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[2].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[2].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[2].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeIII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[2].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeIII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[2].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeIV.HT < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[2].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeV.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[2].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeV.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {area[2].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Single Story With Sprinklers and Frontage ({ff})
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeI.A, area[2].typeI.A, ff) <
                pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeI.A, area[2].typeI.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeI.B, area[2].typeI.B, ff) <
                pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeI.B, area[2].typeI.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeII.A, area[2].typeII.A, ff) <
                pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeII.A, area[2].typeII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeII.B, area[2].typeII.B, ff) <
                pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeII.B, area[2].typeII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIII.A, area[2].typeIII.A, ff) <
                pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeIII.A, area[2].typeIII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIII.B, area[2].typeIII.B, ff) <
                pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeIII.B, area[2].typeIII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIV.HT, area[2].typeIV.HT, ff) <
                pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeIV.HT, area[2].typeIV.HT, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeV.A, area[2].typeV.A, ff) <
                pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeV.A, area[2].typeV.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeV.B, area[2].typeV.B, ff) <
                pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no' ||
                pr.storiesAboveGrade > 1
            }
          >
            {calculateArea (area[0].typeV.B, area[2].typeV.B, ff)}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Multistory With Sprinklers</Table.Cell>
          <Table.Cell
            negative={
              area[3].typeI.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeI.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeIII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeIII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeIV.HT < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeV.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeV.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Multistory With Sprinklers and Frontage ({ff})
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeI.A, area[3].typeI.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeI.A, area[3].typeI.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeI.B, area[3].typeI.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeI.B, area[3].typeI.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeII.A, area[3].typeII.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeII.A, area[3].typeII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeII.B, area[3].typeII.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeII.B, area[3].typeII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIII.A, area[3].typeIII.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeIII.A, area[3].typeIII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIII.B, area[3].typeIII.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeIII.B, area[3].typeIII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIV.HT, area[3].typeIV.HT, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeIV.HT, area[3].typeIV.HT, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeV.A, area[3].typeV.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeV.A, area[3].typeV.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeV.B, area[3].typeV.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeV.B, area[3].typeV.B, ff)}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export const CustomTable4 = ({pr, ff, height, story, area, groupText}) => {
  return (
    <Table celled structured textAlign="center" compact unstackable>
      {tHeader}
      <Table.Body>
        <Table.Row>
          <Table.Cell rowSpan="15">
            {groupText}
          </Table.Cell>
          <Table.Cell rowSpan={height.length}>Height</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={height[0].typeI.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeI.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeII.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeII.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIII.A < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIII.B < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              height[0].typeIV.HT < pr.height || pr.sprinklers === 'yes'
            }
          >
            {height[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeV.A < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={height[0].typeV.B < pr.height || pr.sprinklers === 'yes'}
          >
            {height[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>S13D</Table.Cell>
          <Table.Cell
            negative={height[1].typeI.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeI.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeIII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeIII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeIV.HT < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeV.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={height[1].typeV.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>S13R</Table.Cell>
          <Table.Cell
            negative={height[2].typeI.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeI.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeIII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeIII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeIV.HT < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeV.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={height[2].typeV.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[2].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>With Sprinklers</Table.Cell>
          <Table.Cell
            negative={height[3].typeI.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeI.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeIII.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeIII.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeIV.HT < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeV.A < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={height[3].typeV.B < pr.height || pr.sprinklers === 'no'}
          >
            {height[3].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell rowSpan={story.length}>Stories</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={
              story[0].typeI.A < pr.storiesAboveGrade || pr.sprinklers === 'yes'
            }
          >
            {story[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeI.B < pr.storiesAboveGrade || pr.sprinklers === 'yes'
            }
          >
            {story[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeII.A < pr.storiesAboveGrade ||
                pr.sprinklers === 'yes'
            }
          >
            {story[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeII.B < pr.storiesAboveGrade ||
                pr.sprinklers === 'yes'
            }
          >
            {story[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeIII.A < pr.storiesAboveGrade ||
                pr.sprinklers === 'yes'
            }
          >
            {story[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeIII.B < pr.storiesAboveGrade ||
                pr.sprinklers === 'yes'
            }
          >
            {story[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeIV.HT < pr.storiesAboveGrade ||
                pr.sprinklers === 'yes'
            }
          >
            {story[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeV.A < pr.storiesAboveGrade || pr.sprinklers === 'yes'
            }
          >
            {story[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[0].typeV.B < pr.storiesAboveGrade || pr.sprinklers === 'yes'
            }
          >
            {story[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>S13D</Table.Cell>
          <Table.Cell
            negative={
              story[1].typeI.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeI.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeII.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeII.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeIII.A < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeIII.B < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeIV.HT < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeV.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[1].typeV.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>S13R</Table.Cell>
          <Table.Cell
            negative={
              story[2].typeI.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeI.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeII.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeII.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeIII.A < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[2].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeIII.B < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[2].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeIV.HT < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[2].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeV.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[2].typeV.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[2].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>With Sprinklers</Table.Cell>
          <Table.Cell
            negative={
              story[3].typeI.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[3].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[3].typeI.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[3].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[3].typeII.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[3].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[3].typeII.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[3].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[3].typeIII.A < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[3].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[3].typeIII.B < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[3].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              story[3].typeIV.HT < pr.storiesAboveGrade ||
                pr.sprinklers === 'no'
            }
          >
            {story[3].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              story[3].typeV.A < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[3].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              story[3].typeV.B < pr.storiesAboveGrade || pr.sprinklers === 'no'
            }
          >
            {story[3].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell rowSpan={area.length + 2}>Area</Table.Cell>
          <Table.Cell>Baseline Allowable</Table.Cell>
          <Table.Cell
            negative={
              area[0].typeI.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'yes'
            }
          >
            {area[0].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[0].typeI.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'yes'
            }
          >
            {area[0].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[0].typeII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'yes'
            }
          >
            {area[0].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[0].typeII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'yes'
            }
          >
            {area[0].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[0].typeIII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'yes'
            }
          >
            {area[0].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[0].typeIII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'yes'
            }
          >
            {area[0].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[0].typeIV.HT < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'yes'
            }
          >
            {area[0].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              area[0].typeV.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'yes'
            }
          >
            {area[0].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[0].typeV.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'yes'
            }
          >
            {area[0].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>S13D</Table.Cell>
          <Table.Cell
            negative={
              area[1].typeI.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[1].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[1].typeI.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[1].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[1].typeII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[1].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[1].typeII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[1].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[1].typeIII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[1].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[1].typeIII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[1].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[1].typeIV.HT < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[1].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              area[1].typeV.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[1].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[1].typeV.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[1].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>S13R</Table.Cell>
          <Table.Cell
            negative={
              area[2].typeI.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[2].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeI.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[2].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[2].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[2].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeIII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[2].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeIII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[2].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeIV.HT < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[2].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeV.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[2].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[2].typeV.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[2].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Single Story With Sprinklers</Table.Cell>
          <Table.Cell
            negative={
              area[3].typeI.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeI.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeIII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeIII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeIV.HT < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeV.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[3].typeV.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[3].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Single Story With Sprinklers and Frontage ({ff})
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeI.A, area[3].typeI.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeI.A, area[3].typeI.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeI.B, area[3].typeI.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeI.B, area[3].typeI.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeII.A, area[3].typeII.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeII.A, area[3].typeII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeII.B, area[3].typeII.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeII.B, area[3].typeII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIII.A, area[3].typeIII.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeIII.A, area[3].typeIII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIII.B, area[3].typeIII.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeIII.B, area[3].typeIII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIV.HT, area[3].typeIV.HT, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeIV.HT, area[3].typeIV.HT, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeV.A, area[3].typeV.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeV.A, area[3].typeV.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeV.B, area[3].typeV.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeV.B, area[3].typeV.B, ff)}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Multistory With Sprinklers</Table.Cell>
          <Table.Cell
            negative={
              area[4].typeI.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[4].typeI.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[4].typeI.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[4].typeI.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[4].typeII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[4].typeII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[4].typeII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[4].typeII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[4].typeIII.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[4].typeIII.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[4].typeIII.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[4].typeIII.B}
          </Table.Cell>
          <Table.Cell
            negative={
              area[4].typeIV.HT < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[4].typeIV.HT}
          </Table.Cell>
          <Table.Cell
            negative={
              area[4].typeV.A < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[4].typeV.A}
          </Table.Cell>
          <Table.Cell
            negative={
              area[4].typeV.B < pr.floorAreaOfLargestStory ||
                pr.sprinklers === 'no'
            }
          >
            {area[4].typeV.B}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            Multistory With Sprinklers and Frontage ({ff})
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeI.A, area[4].typeI.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeI.A, area[4].typeI.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeI.B, area[4].typeI.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeI.B, area[4].typeI.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeII.A, area[4].typeII.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeII.A, area[4].typeII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeII.B, area[4].typeII.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeII.B, area[4].typeII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIII.A, area[4].typeIII.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeIII.A, area[4].typeIII.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIII.B, area[4].typeIII.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeIII.B, area[4].typeIII.B, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeIV.HT, area[4].typeIV.HT, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeIV.HT, area[4].typeIV.HT, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeV.A, area[4].typeV.A, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeV.A, area[4].typeV.A, ff)}
          </Table.Cell>
          <Table.Cell
            negative={
              calculateArea (area[0].typeV.B, area[4].typeV.B, ff) <
                pr.floorAreaOfLargestStory || pr.sprinklers === 'no'
            }
          >
            {calculateArea (area[0].typeV.B, area[4].typeV.B, ff)}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
