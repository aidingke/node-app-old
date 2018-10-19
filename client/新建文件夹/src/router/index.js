import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    /**
     * [公共组件=>头部]
     */
    {
      path: '/Header',
      name: 'Header',
      component: resolve => require(['@/common/Header'],resolve)
    },
    /**
     * [公共组件=>成功提示]
     */
    {
      path: '/SuccessDialog',
      name: 'SuccessDialog',
      component: resolve => require(['@/common/SuccessDialog'],resolve)
    },
    /**
     * [公共组件=>确认框]
     */
    {
      path: '/ConfirmDialog',
      name: 'ConfirmDialog',
      component: resolve => require(['@/common/ConfirmDialog'],resolve)
    },
    /**
     * [公共组件=>底部按钮]
     */
    {
        path: '/FixedButton',
        name: 'FixedButton',
        component: resolve => require(['@/common/FixedButton'],resolve)
    },
    /**
     * [公共组件=>成功并确认框]
     */
    {
        path: '/SuccessConfirmDialog',
        name: 'SuccessConfirmDialog',
        component: resolve => require(['@/common/SuccessConfirmDialog'],resolve)
    },
    /**
     * [公共组件=>错误警告弹框]
     */
    {
        path: '/WarningDialog',
        name: 'WarningDialog',
        component: resolve => require(['@/common/WarningDialog'],resolve)
    },
    /**
     * [公共组件=>暂无相关信息]
     */
    {
        path: '/NotInfo',
        name: 'NotInfo',
        component: resolve => require(['@/common/NotInfo'],resolve)
    },
    /**
     * [启动页]
     */
    {
      path: '/',
      name: 'StartPage',
      component: resolve => require(['@/components/StartPage'],resolve)
    },
    /**
     * [绑定设备号]
     */
    {
      path: '/BindDevice',
      name: 'BindDevice',
      component: resolve => require(['@/components/BindDevice'],resolve)
    },
    /**
     * [登录页]
     */
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/components/Login'],resolve)
    },
    /**
     * [首页]
     */
    {
      path: '/Home',
      name: 'Home',
      component: resolve => require(['@/components/Home'],resolve)
    },
    /**
     * [班级课程表]
     * [数据诊断]
     */
    {
      path: '/ClassTableData',
      name: 'ClassTableData',
      component: resolve => require(['@/components/ClassTableData'],resolve)
    },
    /**
     * [录入检测数据]
     */
    {
      path: '/EntryTestData',
      name: 'EntryTestData',
      component: resolve => require(['@/components/EntryTestData'],resolve)
    },
    /**
     * [检测数据]
     */
    {
      path: '/TestData',
      name: 'TestData',
      component: resolve => require(['@/components/TestData'],resolve)
    },
    /** 
     * [课程表]
     */
    {
      path: '/ClassTable',
      name: 'ClassTable',
      component: resolve => require(['@/components/ClassTable'],resolve)
    },
    /**
     *  [选择班级]
     */
    {
      path: '/SelectClass',
      name: 'SelectClass',
      component: resolve => require(['@/components/SelectClass'],resolve)
    },
    /**
     *  [师资管理]
     */
    {
      path: '/TeacherManage',
      name: 'TeacherManage',
      component: resolve => require(['@/components/TeacherManage'],resolve)
    },
    /**
     *  [学生]
     */
    {
      path: '/Student',
      name: 'Student',
      component: resolve => require(['@/components/Student'],resolve)
    },
    /**
     *  [科目管理]
     */
    {
      path: '/SubjectManage',
      name: 'SubjectManage',
      component: resolve => require(['@/components/SubjectManage'],resolve)
    },
    /**
     *  [角色管理]
     */
    {
      path: '/RoleManage',
      name: 'RoleManage',
      component: resolve => require(['@/components/RoleManage'],resolve)
    },
    /**
     * [数据诊断]
     */
    {
      path: '/DataDiagnosis',
      name: 'DataDiagnosis',
      component: resolve => require(['@/components/DataDiagnosis'],resolve)
    },  
    /**
     * [培训与考核]
     */
    {
      path: '/TrainingAndassessment',
      name: 'TrainingAndassessment',
      component: resolve => require(['@/components/TrainingAndassessment'],resolve)
    },
    /**
     * [比赛管理]
     */
    {
      path: '/MatchManage',
      name: 'MatchManage',
      component: resolve => require(['@/components/matchManage/MatchManage'],resolve)
    },
    /**
     * [比赛管理]
     * [比赛组]
     */
    {
      path: '/GroupList',
      name: 'GroupList',
      component: resolve => require(['@/components/matchManage/GroupList'],resolve)
    },
    /**
     * [比赛管理]
     * [比赛组成员]
     */
    {
      path: '/GroupMembers',
      name: 'GroupMembers',
      component: resolve => require(['@/components/matchManage/GroupMembers'],resolve)
    },
    /**
     * [比赛管理]
     * [选择组成员]
     */
    {
      path: '/SelectTeamMembers',
      name: 'SelectTeamMembers',
      component: resolve => require(['@/components/matchManage/SelectTeamMembers'],resolve)
    },
    /**
     * [比赛管理]
     * [比赛考核]
     */
    {
      path: '/AssessmentGame',
      name: 'AssessmentGame',
      component: resolve => require(['@/components/matchManage/AssessmentGame'],resolve)
    },
    /**
     * [比赛管理]
     * [比赛评分]
     */
    {
      path: '/SpeakingScore',
      name: 'SpeakingScore',
      component: resolve => require(['@/components/matchManage/SpeakingScore'],resolve)
    },
    /**
     * [数字化教学资源]
     */
    {
      path: '/DigitalTeachingResources',
      name: 'DigitalTeachingResources',
      component: resolve => require(['@/components/digitalTeachingResources/DigitalTeachingResources'],resolve)
    },
    /**
     * [数字化教学资源]
     * [视频]
     */
    {
      path: '/VideoList',
      name: 'VideoList',
      component: resolve => require(['@/components/digitalTeachingResources/VideoList'],resolve)
    },
    /**
     * [数字化教学资源]
     * [视频详情]
     */
    {
      path: '/VideoDetails',
      name: 'VideoDetails',
      component: resolve => require(['@/components/digitalTeachingResources/VideoDetails'],resolve)
    },
    /**
     * [数字化教学资源]
     * [维修案例]
     */
    {
      path: '/MaintainCaseLibrary',
      name: 'MaintainCaseLibrary',
      component: resolve => require(['@/components/digitalTeachingResources/MaintainCaseLibrary'],resolve)
    },
    /**
     * [数字化教学资源]
     * [维修案例]
     * [故障点详情]
     */
    {
      path: '/MaintainCaseDetails',
      name: 'MaintainCaseDetails',
      component: resolve => require(['@/components/digitalTeachingResources/MaintainCaseDetails'],resolve)
    },
    /**
     * [数字化教学资源]
     * [综合查询]
     */
    {
      path: '/IntegratedQuery',
      name: 'IntegratedQuery',
      component: resolve => require(['@/components/digitalTeachingResources/IntegratedQuery'],resolve)
    },
    /**
     * [数字化教学资源]
     * [综合查询]
     * [选车型]
     */
    {
      path: '/SelectCarModels',
      name: 'SelectCarModels',
      component: resolve => require(['@/components/digitalTeachingResources/SelectCarModels'],resolve)
    },
    /**
     * [数字化教学资源]
     * [综合查询]
     * [电路图详情]
     */
    {
      path: '/CircuitDetails',
      name: 'CircuitDetails',
      component: resolve => require(['@/components/digitalTeachingResources/CircuitDetails'],resolve)
    },
    /**
     * [数字化教学资源]
     * [综合查询]
     * [流媒体查询详情列表]
     */
    {
      path: '/StreamingList',
      name: 'StreamingList',
      component: resolve => require(['@/components/digitalTeachingResources/StreamingList'],resolve)
    },
    /**
     * [数字化教学资源]
     * [综合查询]
     * [流媒体查询详情]
     */
    {
      path: '/StreamingDetails',
      name: 'StreamingDetails',
      component: resolve => require(['@/components/digitalTeachingResources/StreamingDetails'],resolve)
    },
    /**
     * [个人中心]
     */
    {
        path: '/PersonalCenter_fuben',
        name: 'PersonalCenter_fuben',
        component: resolve => require(['@/components/personCenter/PersonalCenter_fuben'],resolve)
    },
    /**
     * [个人中心]
     */
    {
        path: '/PersonalCenter',
        name: 'PersonalCenter',
        component: resolve => require(['@/components/personCenter/PersonalCenter'],resolve)
      },
    /**
     * [修改密码]
     */
    {
        path: '/PassWord',
        name: 'PassWord',
        component: resolve => require(['@/components/personCenter/PassWord'],resolve)
    },
    /**
     * [修改密码]
     */
    {
        path: '/PassWord_fuben',
        name: 'PassWord_fuben',
        component: resolve => require(['@/components/personCenter/PassWord_fuben'],resolve)
      },
    {
        path: '/PersonalData',
        name: 'PersonalData',
        component: resolve => require(['@/components/personCenter/PersonalData'],resolve)
    },
    {
        path: '/PersonalData_fuben',
        name: 'PersonalData_fuben',
        component: resolve => require(['@/components/personCenter/PersonalData_fuben'],resolve)
    },
    {
        path: '/TeacherDeditor',
        name: 'TeacherDeditor',
        component: resolve => require(['@/components/personCenter/TeacherDeditor'],resolve)
    },
    {
        path: '/TeacherDeditor_fuben',
        name: 'TeacherDeditor_fuben',
        component: resolve => require(['@/components/personCenter/TeacherDeditor_fuben'],resolve)
    },
    {
        path: '/PersonalStudent',
        name: 'PersonalStudent',
        component: resolve => require(['@/components/personCenter/PersonalStudent'],resolve)
    },
    {
        path: '/PersonalStudent_fuben',
        name: 'PersonalStudent_fuben',
        component: resolve => require(['@/components/personCenter/PersonalStudent_fuben'],resolve)
    },
    /**
     * [学生版]
     */
    {
        path: '/StudentEditor',
        name: 'StudentEditor',
        component: resolve => require(['@/components/personCenter/StudentEditor'],resolve)
    },
    /**
     * [学生版]
     */
    {
        path: '/StudentEditor_fuben',
        name: 'StudentEditor_fuben',
        component: resolve => require(['@/components/personCenter/StudentEditor_fuben'],resolve)
    },
    /**
     * [考核与培训首页]
     */
    {
      path: '/TrainExamIndex',
      name: 'TrainExamIndex',
      component: resolve => require(['@/components/technology/TrainExamIndex'],resolve)
    },
    /**
     * [课件]
     */
    {
      path: '/CourseWare',
      name: 'CourseWare',
      component: resolve => require(['@/components/technology/CourseWare'],resolve)
    },
    /**
     * [题库]
     */
    {
      path: '/Questions',
      name: 'Questions',
      component: resolve => require(['@/components/technology/Questions'],resolve)
    },
    /**
     * [技能]
     */
    {
      path: '/Skill',
      name: 'Skill',
      component: resolve => require(['@/components/technology/Skill'],resolve)
    },
    /**
     * [试卷]
     */
    {
      path: '/TestPaper',
      name: 'TestPaper',
      component: resolve => require(['@/components/technology/TestPaper'],resolve)
    },
    /**
     * [试卷答案]
     */
    {
      path: '/AnswerTestPaper',
      name: 'AnswerTestPaper',
      component: resolve => require(['@/components/technology/AnswerTestPaper'],resolve)
    },
    /**
     * [考核]
     */
    {
      path: '/Pass',
      name: 'Pass',
      component: resolve => require(['@/components/technology/Pass'],resolve)
    },
    /**
     * [教师管理考核]
     */
    {
      path: '/TeachPass',
      name: 'TeachPass',
      component: resolve => require(['@/components/technology/teacher/TeachPass'],resolve)
    },
    /**
     * [教师管理考核详情]
     */
    {
      path: '/TeachPassDetails/:id',
      name: 'TeachPassDetails',
      component: resolve => require(['@/components/technology/teacher/TeachPassDetails'],resolve)
    },
     /**
     * [单选题]
     */
    {
      path: '/Single',
      name: 'Single',
      component: resolve => require(['@/components/technology/Single'],resolve)
    },
     /**
     * [多选题库]
     */
    {
      path: '/MultipleChoice',
      name: 'MultipleChoice',
      component: resolve => require(['@/components/technology/MultipleChoice'],resolve)
    },
     /**
     * [填空题库]
     */
    {
      path: '/Completion',
      name: 'Completion',
      component: resolve => require(['@/components/technology/Completion'],resolve)
    },
    /**
     * [论述题库]
     */
    {
      path: '/Discussion',
      name: 'Discussion',
      component: resolve => require(['@/components/technology/Discussion'],resolve)
    },
    /**
     * [练习列表]
     */
    {
      path: '/ExerciseList',
      name: 'ExerciseList',
      component: resolve => require(['@/components/technology/ExerciseList'],resolve)
    },
    /**
     * [作业(学生)]
     */
    {
      path: '/Task',
      name: 'Task',
      component: resolve => require(['@/components/technology/Task'],resolve)
    },
    /**
     * [作业管理(教师)]
     */
    {
      path: '/TeachTask',
      name: 'TeachTask',
      component: resolve => require(['@/components/technology/teacher/TeachTask'],resolve)
    },
    /**
     * [技术培训]
     */
    {
      path: '/Training',
      name: 'Training',
      component: resolve => require(['@/components/technology/Training'],resolve)
    },
    /**
     * [技术培训(教师)]
     */
    {
      path: '/TeachTraining',
      name: 'TeachTraining',
      component: resolve => require(['@/components/technology/teacher/TeachTraining'],resolve)
    },
    /**
     * [技术培训列表]
     */
    {
      path: '/TrainList',
      name: 'TrainList',
      component: resolve => require(['@/components/technology/TrainList'],resolve)
    },
    /**
     * [教师管理报名学生总数]
     */
    {
      path: '/TeachTrainDetails/:id',
      name: 'TeachTrainDetails',
      component: resolve => require(['@/components/technology/teacher/TeachTrainDetails'],resolve)
    }
  ],
  linkActiveClass:"active"
})


