'use client';

import { useEffect, useState } from 'react';
import {Person } from "../types/person";
import { PeopleResponse } from "../types/peopleResponse";
import axios from "axios";

export const usePeopleApi = () => {
    const [data, setData] = useState(null)
    const currentPerson, setPerson] = useState<Person | null>(null);
    const [personHistory, setPersonHistory] = useState<Person[]>([]);  
     