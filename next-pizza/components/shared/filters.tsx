import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Filters" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Can add" value="1" />
                <FilterCheckbox text="New additions" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Price min max:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" placeholder="1000" min={100} max={1000} />
                </div>

                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>

            <CheckboxFiltersGroup
                title="Ingredients"
                className="mt-5"
                limit={6}
                defaultItems={[
                    { text: 'Mushrooms', value: '1' },
                    { text: 'Cheese', value: '2' },
                    { text: 'Tomato', value: '3' },
                    { text: 'Bacon', value: '4' },
                    { text: 'Olives', value: '5' },
                    { text: 'Pepperoni', value: '6' },
                ]}
                items={[
                    { text: 'Mushrooms', value: '1' },
                    { text: 'Cheese', value: '2' },
                    { text: 'Tomato', value: '3' },
                    { text: 'Bacon', value: '4' },
                    { text: 'Olives', value: '5' },
                    { text: 'Pepperoni', value: '6' },
                ]}
            />
        </div>
    );
};
// 05:56:25
// daily commit