import { Component } from 'react';

import { I_Poke } from '../types/types';

import './ElemList.module.css';

export default class ElemList extends Component<{
  elemlist: I_Poke[];
  isbreak: boolean;
}> {
  render() {
    const { elemlist, isbreak } = this.props;
    if (isbreak) throw Error('Error!');
    return (
      <div className="elem">
        <ul className="elem_list">
          {elemlist.map(({ name, url, skills, types }, e) => (
            <li key={e} className="elem_item">
              <h2 className="elem_name">{name}</h2>
              <div className="elem_wrapper">
                <img src={url} alt={name} title={name} className="elem_img" />
              </div>
              <div className="elem_property">
                <ul className="elem_skills">
                  Skills:
                  {skills.map(({ skill }, e) => (
                    <li key={e}>
                      {e + 1 < skills.length ? skill.name + ',' : skill.name}
                    </li>
                  ))}
                </ul>
                <ul className="elem_types">
                  Types:
                  {types.map(({ type }, e) => (
                    <li key={e}>
                      {e + 1 < types.length ? type.name + ',' : type.name}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
