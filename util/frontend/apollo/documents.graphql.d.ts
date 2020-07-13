/* ee2e9b96f7def2ce93fef726c5234b50e17b57df
 * This file is automatically generated by graphql-let. */

/// <reference types="react" />
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: any;
}> = {
    [K in keyof T]: T[K];
};
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type AuthPayload = {
    __typename?: 'AuthPayload';
    token?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    message?: Maybe<Scalars['String']>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    createProject: Project;
    createTask: Task;
    createTech: Tech;
    createUser: AuthPayload;
    deleteProject: Project;
    deleteTask: Task;
    deleteTech: Tech;
    deleteUser?: Maybe<User>;
    updateProject: Project;
    updateTask: Task;
    updateTech: Tech;
    updateUser: User;
    signIn: AuthPayload;
};
export declare type MutationCreateProjectArgs = {
    beschreibung: Scalars['String'];
    name: Scalars['String'];
    url: Scalars['String'];
    click: Scalars['String'];
};
export declare type MutationCreateTaskArgs = {
    beschreibung: Scalars['String'];
    code: Scalars['String'];
    name: Scalars['String'];
    click: Scalars['String'];
};
export declare type MutationCreateTechArgs = {
    beschreibung: Scalars['String'];
    name: Scalars['String'];
    pic: Scalars['String'];
};
export declare type MutationCreateUserArgs = {
    email: Scalars['String'];
    nachname: Scalars['String'];
    password: Scalars['String'];
    title: Scalars['String'];
};
export declare type MutationDeleteProjectArgs = {
    projectId: Scalars['Int'];
};
export declare type MutationDeleteTaskArgs = {
    taskId: Scalars['Int'];
};
export declare type MutationDeleteTechArgs = {
    techId: Scalars['Int'];
};
export declare type MutationDeleteUserArgs = {
    userId: Scalars['Int'];
};
export declare type MutationUpdateProjectArgs = {
    beschreibung: Scalars['String'];
    name: Scalars['String'];
    oldName: Scalars['String'];
    url: Scalars['String'];
    click: Scalars['String'];
};
export declare type MutationUpdateTaskArgs = {
    beschreibung: Scalars['String'];
    code: Scalars['String'];
    name: Scalars['String'];
    oldName: Scalars['String'];
    click: Scalars['String'];
};
export declare type MutationUpdateTechArgs = {
    beschreibung: Scalars['String'];
    name: Scalars['String'];
    oldName: Scalars['String'];
    pic: Scalars['String'];
};
export declare type MutationUpdateUserArgs = {
    email: Scalars['String'];
    nachname: Scalars['String'];
    oldMail: Scalars['String'];
    password: Scalars['String'];
    title: Scalars['String'];
};
export declare type MutationSignInArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type Project = {
    __typename?: 'Project';
    beschreibung?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    name: Scalars['String'];
    url: Scalars['String'];
    click: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    allProjects: Array<Project>;
    allTasks: Array<Task>;
    allTechs: Array<Tech>;
    allUsers: Array<User>;
    allTaskIds: Array<Taskid>;
    getProject: Project;
    getTask: Task;
    getTech: Tech;
    getUser: User;
};
export declare type QueryGetProjectArgs = {
    name: Scalars['String'];
};
export declare type QueryGetTaskArgs = {
    name: Scalars['String'];
};
export declare type QueryGetTechArgs = {
    name: Scalars['String'];
};
export declare type Task = {
    __typename?: 'Task';
    id: Scalars['Int'];
    name: Scalars['String'];
    beschreibung: Scalars['String'];
    code: Scalars['String'];
    click: Scalars['String'];
};
export declare type Taskid = {
    __typename?: 'Taskid';
    name: Scalars['String'];
};
export declare type Tech = {
    __typename?: 'Tech';
    beschreibung?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    name: Scalars['String'];
    pic: Scalars['String'];
};
export declare type User = {
    __typename?: 'User';
    email: Scalars['String'];
    id: Scalars['Int'];
    nachname: Scalars['String'];
    password: Scalars['String'];
    title?: Maybe<Scalars['String']>;
};
export declare type AllTechsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllTechsQuery = ({
    __typename?: 'Query';
} & {
    allTechs: Array<({
        __typename?: 'Tech';
    } & Pick<Tech, 'id' | 'name' | 'beschreibung' | 'pic'>)>;
});
export declare type AllProjectsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllProjectsQuery = ({
    __typename?: 'Query';
} & {
    allProjects: Array<({
        __typename?: 'Project';
    } & Pick<Project, 'name' | 'beschreibung' | 'url' | 'click'>)>;
});
export declare type AllTasksQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllTasksQuery = ({
    __typename?: 'Query';
} & {
    allTasks: Array<({
        __typename?: 'Task';
    } & Pick<Task, 'name' | 'beschreibung' | 'code' | 'click'>)>;
});
export declare type AllUsersQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllUsersQuery = ({
    __typename?: 'Query';
} & {
    allUsers: Array<({
        __typename?: 'User';
    } & Pick<User, 'nachname' | 'email' | 'id'>)>;
});
export declare type GetTaskQueryVariables = Exact<{
    name: Scalars['String'];
}>;
export declare type GetTaskQuery = ({
    __typename?: 'Query';
} & {
    getTask: ({
        __typename?: 'Task';
    } & Pick<Task, 'name' | 'beschreibung' | 'code' | 'click'>);
});
export declare type AllDataQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllDataQuery = ({
    __typename?: 'Query';
} & {
    allProjects: Array<({
        __typename?: 'Project';
    } & Pick<Project, 'name' | 'beschreibung' | 'url'>)>;
    allTasks: Array<({
        __typename?: 'Task';
    } & Pick<Task, 'name' | 'beschreibung' | 'code'>)>;
    allUsers: Array<({
        __typename?: 'User';
    } & Pick<User, 'nachname' | 'email' | 'id'>)>;
    allTechs: Array<({
        __typename?: 'Tech';
    } & Pick<Tech, 'id' | 'name' | 'beschreibung' | 'pic'>)>;
});
export declare type AllPublicDataQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllPublicDataQuery = ({
    __typename?: 'Query';
} & {
    allProjects: Array<({
        __typename?: 'Project';
    } & Pick<Project, 'name' | 'beschreibung' | 'url' | 'click'>)>;
    allTechs: Array<({
        __typename?: 'Tech';
    } & Pick<Tech, 'id' | 'name' | 'beschreibung' | 'pic'>)>;
});
export declare type AllTaskIdsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllTaskIdsQuery = ({
    __typename?: 'Query';
} & {
    allTaskIds: Array<({
        __typename?: 'Taskid';
    } & Pick<Taskid, 'name'>)>;
});
export declare type SignInMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
}>;
export declare type SignInMutation = ({
    __typename?: 'Mutation';
} & {
    signIn: ({
        __typename?: 'AuthPayload';
    } & Pick<AuthPayload, 'token' | 'message'> & {
        user?: Maybe<({
            __typename?: 'User';
        } & Pick<User, 'email' | 'title' | 'nachname'>)>;
    });
});
export declare type CreateUserMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
    nachname: Scalars['String'];
    title: Scalars['String'];
}>;
export declare type CreateUserMutation = ({
    __typename?: 'Mutation';
} & {
    createUser: ({
        __typename?: 'AuthPayload';
    } & Pick<AuthPayload, 'token'> & {
        user?: Maybe<({
            __typename?: 'User';
        } & Pick<User, 'email' | 'title' | 'nachname'>)>;
    });
});
export declare type CreateTaskMutationVariables = Exact<{
    name: Scalars['String'];
    beschreibung: Scalars['String'];
    click: Scalars['String'];
    code: Scalars['String'];
}>;
export declare type CreateTaskMutation = ({
    __typename?: 'Mutation';
} & {
    createTask: ({
        __typename?: 'Task';
    } & Pick<Task, 'name' | 'beschreibung' | 'code' | 'click'>);
});
export declare type GetUserQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetUserQuery = ({
    __typename?: 'Query';
} & {
    getUser: ({
        __typename?: 'User';
    } & Pick<User, 'email' | 'nachname' | 'title'>);
});
export declare const AllTechsDocument: import("graphql").DocumentNode;
export declare type AllTechsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTechsQuery, AllTechsQueryVariables>, 'query'>;
export declare const AllTechsComponent: (props: AllTechsComponentProps) => JSX.Element;
/**
 * __useAllTechsQuery__
 *
 * To run a query within a React component, call `useAllTechsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTechsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTechsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAllTechsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTechsQuery, AllTechsQueryVariables>): ApolloReactCommon.QueryResult<AllTechsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllTechsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTechsQuery, AllTechsQueryVariables>): ApolloReactHooks.QueryTuple<AllTechsQuery, Exact<{
    [key: string]: never;
}>>;
export declare type AllTechsQueryHookResult = ReturnType<typeof useAllTechsQuery>;
export declare type AllTechsLazyQueryHookResult = ReturnType<typeof useAllTechsLazyQuery>;
export declare type AllTechsQueryResult = ApolloReactCommon.QueryResult<AllTechsQuery, AllTechsQueryVariables>;
export declare const AllProjectsDocument: import("graphql").DocumentNode;
export declare type AllProjectsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllProjectsQuery, AllProjectsQueryVariables>, 'query'>;
export declare const AllProjectsComponent: (props: AllProjectsComponentProps) => JSX.Element;
/**
 * __useAllProjectsQuery__
 *
 * To run a query within a React component, call `useAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAllProjectsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>): ApolloReactCommon.QueryResult<AllProjectsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllProjectsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>): ApolloReactHooks.QueryTuple<AllProjectsQuery, Exact<{
    [key: string]: never;
}>>;
export declare type AllProjectsQueryHookResult = ReturnType<typeof useAllProjectsQuery>;
export declare type AllProjectsLazyQueryHookResult = ReturnType<typeof useAllProjectsLazyQuery>;
export declare type AllProjectsQueryResult = ApolloReactCommon.QueryResult<AllProjectsQuery, AllProjectsQueryVariables>;
export declare const AllTasksDocument: import("graphql").DocumentNode;
export declare type AllTasksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTasksQuery, AllTasksQueryVariables>, 'query'>;
export declare const AllTasksComponent: (props: AllTasksComponentProps) => JSX.Element;
/**
 * __useAllTasksQuery__
 *
 * To run a query within a React component, call `useAllTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTasksQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAllTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTasksQuery, AllTasksQueryVariables>): ApolloReactCommon.QueryResult<AllTasksQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTasksQuery, AllTasksQueryVariables>): ApolloReactHooks.QueryTuple<AllTasksQuery, Exact<{
    [key: string]: never;
}>>;
export declare type AllTasksQueryHookResult = ReturnType<typeof useAllTasksQuery>;
export declare type AllTasksLazyQueryHookResult = ReturnType<typeof useAllTasksLazyQuery>;
export declare type AllTasksQueryResult = ApolloReactCommon.QueryResult<AllTasksQuery, AllTasksQueryVariables>;
export declare const AllUsersDocument: import("graphql").DocumentNode;
export declare type AllUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUsersQuery, AllUsersQueryVariables>, 'query'>;
export declare const AllUsersComponent: (props: AllUsersComponentProps) => JSX.Element;
/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAllUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>): ApolloReactCommon.QueryResult<AllUsersQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>): ApolloReactHooks.QueryTuple<AllUsersQuery, Exact<{
    [key: string]: never;
}>>;
export declare type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export declare type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export declare type AllUsersQueryResult = ApolloReactCommon.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export declare const GetTaskDocument: import("graphql").DocumentNode;
export declare type GetTaskComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTaskQuery, GetTaskQueryVariables>, 'query'> & ({
    variables: GetTaskQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
});
export declare const GetTaskComponent: (props: GetTaskComponentProps) => JSX.Element;
/**
 * __useGetTaskQuery__
 *
 * To run a query within a React component, call `useGetTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export declare function useGetTaskQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTaskQuery, GetTaskQueryVariables>): ApolloReactCommon.QueryResult<GetTaskQuery, Exact<{
    name: string;
}>>;
export declare function useGetTaskLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTaskQuery, GetTaskQueryVariables>): ApolloReactHooks.QueryTuple<GetTaskQuery, Exact<{
    name: string;
}>>;
export declare type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export declare type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export declare type GetTaskQueryResult = ApolloReactCommon.QueryResult<GetTaskQuery, GetTaskQueryVariables>;
export declare const AllDataDocument: import("graphql").DocumentNode;
export declare type AllDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllDataQuery, AllDataQueryVariables>, 'query'>;
export declare const AllDataComponent: (props: AllDataComponentProps) => JSX.Element;
/**
 * __useAllDataQuery__
 *
 * To run a query within a React component, call `useAllDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDataQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAllDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllDataQuery, AllDataQueryVariables>): ApolloReactCommon.QueryResult<AllDataQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllDataQuery, AllDataQueryVariables>): ApolloReactHooks.QueryTuple<AllDataQuery, Exact<{
    [key: string]: never;
}>>;
export declare type AllDataQueryHookResult = ReturnType<typeof useAllDataQuery>;
export declare type AllDataLazyQueryHookResult = ReturnType<typeof useAllDataLazyQuery>;
export declare type AllDataQueryResult = ApolloReactCommon.QueryResult<AllDataQuery, AllDataQueryVariables>;
export declare const AllPublicDataDocument: import("graphql").DocumentNode;
export declare type AllPublicDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllPublicDataQuery, AllPublicDataQueryVariables>, 'query'>;
export declare const AllPublicDataComponent: (props: AllPublicDataComponentProps) => JSX.Element;
/**
 * __useAllPublicDataQuery__
 *
 * To run a query within a React component, call `useAllPublicDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPublicDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPublicDataQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAllPublicDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllPublicDataQuery, AllPublicDataQueryVariables>): ApolloReactCommon.QueryResult<AllPublicDataQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllPublicDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllPublicDataQuery, AllPublicDataQueryVariables>): ApolloReactHooks.QueryTuple<AllPublicDataQuery, Exact<{
    [key: string]: never;
}>>;
export declare type AllPublicDataQueryHookResult = ReturnType<typeof useAllPublicDataQuery>;
export declare type AllPublicDataLazyQueryHookResult = ReturnType<typeof useAllPublicDataLazyQuery>;
export declare type AllPublicDataQueryResult = ApolloReactCommon.QueryResult<AllPublicDataQuery, AllPublicDataQueryVariables>;
export declare const AllTaskIdsDocument: import("graphql").DocumentNode;
export declare type AllTaskIdsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTaskIdsQuery, AllTaskIdsQueryVariables>, 'query'>;
export declare const AllTaskIdsComponent: (props: AllTaskIdsComponentProps) => JSX.Element;
/**
 * __useAllTaskIdsQuery__
 *
 * To run a query within a React component, call `useAllTaskIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTaskIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTaskIdsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAllTaskIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTaskIdsQuery, AllTaskIdsQueryVariables>): ApolloReactCommon.QueryResult<AllTaskIdsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllTaskIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTaskIdsQuery, AllTaskIdsQueryVariables>): ApolloReactHooks.QueryTuple<AllTaskIdsQuery, Exact<{
    [key: string]: never;
}>>;
export declare type AllTaskIdsQueryHookResult = ReturnType<typeof useAllTaskIdsQuery>;
export declare type AllTaskIdsLazyQueryHookResult = ReturnType<typeof useAllTaskIdsLazyQuery>;
export declare type AllTaskIdsQueryResult = ApolloReactCommon.QueryResult<AllTaskIdsQuery, AllTaskIdsQueryVariables>;
export declare const SignInDocument: import("graphql").DocumentNode;
export declare type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;
export declare type SignInComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignInMutation, SignInMutationVariables>, 'mutation'>;
export declare const SignInComponent: (props: SignInComponentProps) => JSX.Element;
/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export declare function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>): ApolloReactHooks.MutationTuple<SignInMutation, Exact<{
    email: string;
    password: string;
}>>;
export declare type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export declare type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export declare type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export declare const CreateUserDocument: import("graphql").DocumentNode;
export declare type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export declare type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;
export declare const CreateUserComponent: (props: CreateUserComponentProps) => JSX.Element;
/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      nachname: // value for 'nachname'
 *      title: // value for 'title'
 *   },
 * });
 */
export declare function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>): ApolloReactHooks.MutationTuple<CreateUserMutation, Exact<{
    email: string;
    password: string;
    nachname: string;
    title: string;
}>>;
export declare type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export declare type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export declare type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export declare const CreateTaskDocument: import("graphql").DocumentNode;
export declare type CreateTaskMutationFn = ApolloReactCommon.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;
export declare type CreateTaskComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTaskMutation, CreateTaskMutationVariables>, 'mutation'>;
export declare const CreateTaskComponent: (props: CreateTaskComponentProps) => JSX.Element;
/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      name: // value for 'name'
 *      beschreibung: // value for 'beschreibung'
 *      click: // value for 'click'
 *      code: // value for 'code'
 *   },
 * });
 */
export declare function useCreateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>): ApolloReactHooks.MutationTuple<CreateTaskMutation, Exact<{
    name: string;
    beschreibung: string;
    click: string;
    code: string;
}>>;
export declare type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export declare type CreateTaskMutationResult = ApolloReactCommon.MutationResult<CreateTaskMutation>;
export declare type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export declare const GetUserDocument: import("graphql").DocumentNode;
export declare type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'>;
export declare const GetUserComponent: (props: GetUserComponentProps) => JSX.Element;
/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>): ApolloReactCommon.QueryResult<GetUserQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>): ApolloReactHooks.QueryTuple<GetUserQuery, Exact<{
    [key: string]: never;
}>>;
export declare type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export declare type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export declare type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;